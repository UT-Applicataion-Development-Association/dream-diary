# dream-diary

## Initialization Instructions

### Dependencies

Please first install the following dependencies to your PC.

- Node.js
- MongoDB Compass

```sh
# Initialize this app, if you clone the repository, then you don't need to do this.
npm init
```

### Express Server

```sh
# Install dependencies
npm install

# Run the app
npm start

# Run the app in dev environment
npm run dev
```

### React Client

``` sh
cd dream-diary-client

# Install dependencies
npm install

# Run the app
npm start
```

## Structure

- models (entity): an instance of object in the database.
- services (use case): managing models. The services provided by a program.
- controllers: handle user input, format output.
- api (routes, also controllers): routes, receive requests and send responses.
- db (gateway): setup connection.

## Contribution

Frontend:
Nora, Elaine, Ray, Yanlin, Jessica
Backend:
Stephanie, Zhang Kai, Jessica, Yanlin, Minyi

## Phase 1

### Description

When user open the app, it can see a list of cards, where each card represents a dream. User can login and register. By clicking a "compose" button, user can create a dream card. User can also see its dreams in profile.

#### Models/Entity

User

- If user does not login, then it can store dreams in localStorage.
- If user login, then the dreams will be upload to server.
- A list of dreams.

Dream

- Content
- Date (input, has default to today)
- Optional title
- Image
  - User randomly fetch images.
  - Emotion - color. A list of emotion -> a colorful image/渐变.
    - Label, tag
  - Emoji
- Dreamer

EmoDiary

- Emoji

### Features

- [ ] Models
- [ ] Login
- [ ] Register
- [ ] CRUD Dream (Create, Retrieve, Update, Delete)
