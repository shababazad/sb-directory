import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b9ff15428786f935ee33c5b7ac8b7fd0@o4509525008842752.ingest.us.sentry.io/4509525011070976",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});

//why i am not getting the option report the bug in the UI?