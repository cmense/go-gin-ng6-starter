package config

import (
    _ "github.com/jinzhu/gorm/dialects/postgres"
    "github.com/jinzhu/gorm"
    "fmt"
    "os"
    "strings"
    "github.com/app8izer/go-gin-ng6-starter/backend/utils"
    "github.com/app8izer/go-gin-ng6-starter/backend/models"
)

var db *gorm.DB //database

func init() {
    var (
        username string
        password string
        dbName   string
        dbHost   string
    )
    if dbUrl := os.Getenv("DATABASE_URL"); dbUrl != "" {
        username = strings.Split(strings.Split(dbUrl, "//")[1], ":")[0]
        password = strings.Split(strings.Split(dbUrl, ":")[2], "@")[0]
        dbName = strings.Split(strings.Split(dbUrl, "@")[1], "/")[1]
        dbHost = strings.Split(strings.Split(dbUrl, "@")[1], ":")[0]
    } else {
        username = utils.GetEnv("db_user", "go_usr")
        password = utils.GetEnv("db_pass", "go_pwd")
        dbName = utils.GetEnv("db_name", "go_db")
        dbHost = utils.GetEnv("db_host", "localhost")
    }

    dbUri := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s", dbHost, username, dbName, password) //Build connection string
    fmt.Println(dbUri)

    conn, err := gorm.Open("postgres", dbUri)
    if err != nil {
        fmt.Print(err)
    }

    db = conn
    // Database migration
    db.Debug().AutoMigrate(&models.User{})
    db.Debug().AutoMigrate(&models.Address{})
    db.Debug().AutoMigrate(&models.CreditCard{})
}

//returns a handle to the DB object
func GetDB() *gorm.DB {
    return db
}
