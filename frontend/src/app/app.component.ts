import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {models} from "./shared/types/proto-types";
import User = models.User;
import {map} from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng6-app';

    constructor(private http: HttpClient) {
        this.http.get("api/user")
            .pipe(
                map((res: any) => JSON.parse(res))
            )
            .subscribe((users: User[]) => {
                console.log(users);
            });

        let user: User = new User();
        user.Name = "Daniel";
        user.Phone = "1234";
        this.http.post("api/user", String.fromCharCode.apply(null, User.encode(user).finish()), {
            // String.fromCharCode.apply(null, User.encode(user).finish())
            headers: {
                'Accept': 'application/x-protobuf',
                'Content-Type': 'application/x-protobuf'
            },
            responseType: "arraybuffer"
        })
            .pipe(
                map((res: ArrayBuffer) => User.decode(new Uint8Array(res)))
            )
            .subscribe((user: User) => {
                console.log(user);
                this.http.get("api/user/" + user.ID, {
                    headers: {'Accept': 'application/x-protobuf'},
                    responseType: "arraybuffer"
                })
                    .pipe(
                        map((res: ArrayBuffer) => User.decode(new Uint8Array(res)))
                    )
                    .subscribe((user: User) => {
                        console.log(user);
                    });
                this.http.get("api/json/" + user.ID, {
                })
                    .pipe(
                        map((res: any) => JSON.parse(res))
                    )
                    .subscribe((user: User) => {
                        console.log(user);
                    });
            });
    }
}
