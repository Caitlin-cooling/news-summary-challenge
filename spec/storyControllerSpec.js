describe("storyController", function() {
  it("shows the headline titles on index page", function() {
    var story = new Story("News story", "www.news.com");
    var storyList = new StoryList();
    storyList.addStory(story)
    var storyListView = new StoryListView(storyList);
    var storyController = new StoryController(storyListView);

    var element = document.createElement('div')
    element.id = 'story'
    document.body.appendChild(element)
    storyController.updateText();
    expect(element.innerHTML).toEqual('<ul><li><div id="0"><a href="#0">News story</a></div></li></ul>')
  });
});
