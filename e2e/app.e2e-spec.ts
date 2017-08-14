import { MoviesProjectPrepPage } from './app.po';

describe('movies-project-prep App', () => {
  let page: MoviesProjectPrepPage;

  beforeEach(() => {
    page = new MoviesProjectPrepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
