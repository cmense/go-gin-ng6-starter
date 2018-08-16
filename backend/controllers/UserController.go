package controllers

import (
    "net/http"
    "encoding/json"
    "github.com/gin-gonic/gin"
    "log"
    "github.com/golang/protobuf/proto"
    "github.com/gin-gonic/gin/binding"
    "github.com/app8izer/go-gin-ng6-starter/backend/services"
    "github.com/app8izer/go-gin-ng6-starter/backend/models"
)

var userService = services.GetUserServiceInstance()

func GetUserById(c *gin.Context) {
    userId := c.Param("userId")
    if userId != "" {
        user := userService.GetById(userId)
        res, err := proto.Marshal(user)
        if err != nil {
            log.Fatalln("Failed to encode user data:", err)
        }
        if err == nil {
            c.Data(http.StatusOK, binding.MIMEPROTOBUF, res)
            return
        }
    }
    c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
}

func GetUserByIdJson(c *gin.Context) {
    userId := c.Param("userId")
    if userId != "" {
        res, err := json.Marshal(userService.GetById(userId))
        if err == nil {
            c.JSON(http.StatusOK, string(res))
            return
        }
    }
    c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
}

func GetAllUsers(c *gin.Context) {
    res, err := json.Marshal(userService.GetAll()) // check: https://github.com/golang/protobuf/issues/507
    if err == nil {
        c.JSON(http.StatusOK, string(res))
        return
    }
    c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
}

func CreateUser(c *gin.Context) {
    user := models.User{}
    err := binding.ProtoBuf.Bind(c.Request, &user)
    if err == nil {
        res, err := proto.Marshal(userService.Create(&user))
        c.Data(http.StatusOK, binding.MIMEPROTOBUF, res)
        if err == nil {
            return
        }
    }
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
}
