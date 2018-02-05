import { Make30NewPage } from './app.po';

describe('make30-new App', () => {
  let page: Make30NewPage;

  beforeEach(() => {
    page = new Make30NewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
