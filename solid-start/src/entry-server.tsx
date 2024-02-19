import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => {
      return (
      <html lang="en">
        <head>
          <base href="/portfolio" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          {children}
          {scripts}
        </body>
      </html>
    )
  }}  />
));
