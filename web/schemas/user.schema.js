module.exports={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "/users",
    "title": "Users",
    "description": "Add users",
    "type": "object",
    "properties": {
        "firstname": {
          "description": "Dog name",
          "type": "string"
        },
        "lastname": {
          "description": "Dog age",
          "type": "string"
        },
        "username": {
            "description": "Dog age",
            "type": "string"
          },
          "email": {
            "description": "Dog age",
            "type": "string"
          },
          "password": {
            "description": "Dog age",
            "type": "string"
          },
          "role": {
            "description": "Dog age",
            "type": "string"
          },
          "center": {
            "description": "Dog age",
            "type": "string"
          },
      },
      "required": ["firstname", "lastname","username","email","password","role"]
}