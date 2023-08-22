import App from './config/app';

void (
  async () => {
    try {
      const app = new App();
      app.setConfig();
      app.build();
      app.listen();
    } catch (error) {
      console.log(error)
    }
  }
)()
