# App Architecture

Review csc207.

- models (entity): an instance of object in the database.
- services (use case): managing models. The services provided by a program.
- controllers: handle user input, format output.
- api (routes, also controllers): routes, receive requests and send responses.
- db (gateway): setup connection.
- dao: provide interface for basic database access.
