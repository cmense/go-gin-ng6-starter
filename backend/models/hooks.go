package models

import (
    "github.com/jinzhu/gorm"
    "time"
)

// Add custom hooks here, e.g. for ORM
func (u *User) BeforeCreate(scope *gorm.Scope) error {
    scope.SetColumn("CreatedAt", time.Now().UnixNano())
    scope.SetColumn("UpdatedAt", time.Now().UnixNano())
    return nil
}

func (u *User) BeforeUpdate(scope *gorm.Scope) error {
    scope.SetColumn("UpdatedAt", time.Now().UnixNano())
    return nil
}
