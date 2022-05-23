module.exports={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "/dog",
    "title": "Dog",
    "description": "An Dog in the blog",
    "type": "object",
    "properties": {
        "name": {
          "description": "Dog name",
          "type": "string"
        },
        "age": {
          "description": "Dog age",
          "type": "string",
        },
        "code": {
          "description": "Dog code",
          "type": "string"
        },
        "center": {
          "description": "Dog center",
          "type": "string"
        },
        "about": {
          "description": "Dog about",
          "type": "string"
        },
        "photo": {
          "description": "Dog photo",
          "type": "string"
        },
      },
      "required": ["name", "age","code","center","about"]
}