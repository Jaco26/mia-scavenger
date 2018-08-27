# Express API Documentation


## User endpoints

* The root url for all user end points is `/api/user`
* All payloads must include exact property names as specified below 

## POST

### Create user: `/`
  - payload: 
    - username {string}
    - password {string}
    - school {string}
    - grade {int}
  - returns:
    - if username exists, a message to alert if username already exists
    - else status 200 or 500
  
### Save art: `/art`
  - payload:
    - user_id {int} 
    - miapi_id {string} the ID returned from the MIA api
  - returns :
    - if art is already saved for user, alert message
    - else status 200 or 500

### Create a playlist `/playlist`
  - payload:
    - playlist_name {string}
    - user_id {int}
    - miapi_id {string} the ID returned from the MIA api
  - returns:
    - if playlist_name exists for current user, an alert message
    - else status 200 or 500

## GET

### Get user info `/:username/:password`
  - returns:
    - id {int}
    - username {string}
    - password {string}
    - user_role {int} default value = 1 
    - school {string} 
    - grade {int}
  
### Get art saved by user `/art/:userId`
  - returns:
    [obj, ...]
      - miaResults
        - fields from the MIA api
      - dbResults
        - fields pulled from our db


### Get playlists `/playlists/:userId`
  - returns: 
    - [obj, ...]
      - playlist_name {string}
      - user_id {int}
      - cover_art_id {string} MIA api art id
      - art_ids {string[]} MIA api art ids
  
### Get art for a given playlist `/playlist/:artIds`
  - returns:
    - [obj, ...]
      - miaResults
        - fields from the MIA api
    

## PATCH

### Update user info `/`
  - payload:
    - username {string}
    - school {string}
    - grade {int}
  - returns:
    - status 200 or 500

### Update playlist info `/playlist`
  - payload:
    - playlist_name {string}
    - cover_art_id {string} MIA api art id
    - playlist_id {int}
  - returns:
    - status 200 or 500

### Update playlist art `/playlist/art`
  - payload:
    - playlist_id {int}
    - art_ids {string[]} MIA api art ids
  - returns:
    - status 200 or 500


## DELETE

### Delete user `/:userId`
  - returns:
    - status 200 or 500

### Delete playlist `/playlist/:playlistId`
  - returns:
    - status 200 or 500

### Delete saved art `/art/:userId/:artId`
  - returns:
    - status 200 or 500

  




 
       





