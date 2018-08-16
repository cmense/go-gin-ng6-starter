package main

import (
    "github.com/gin-gonic/gin"
    "github.com/app8izer/go-gin-ng6-starter/backend/controllers"
    "github.com/app8izer/go-gin-ng6-starter/backend/utils"
)

func setupRouter() *gin.Engine {
    r := gin.Default() // init router with default mw (e.g. logging)

    r.GET("/api/json/:userId", controllers.GetUserByIdJson)
    user := r.Group("/api/user")
    {
        user.POST("/", controllers.CreateUser)
        user.GET("/:userId", controllers.GetUserById)
        user.GET("/", controllers.GetAllUsers)
    }

    return r
}

func main() {
    // setup router
    r := setupRouter()

    // get port from env or use default 8080
    port := utils.GetEnv("PORT", "8080")

    // TODO: add ENV here (prod, dev, test) and setup router, server, db based on config

    // run http server
    r.Run(":" + port)
}
