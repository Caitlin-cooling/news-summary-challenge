describe("Story", function(){
  it("a story has a healine", function() {
    var story = new Story("News story");
    expect(story.headline).toEqual("News story");
  });

  it("has content", function() {
    var story = new Story("News story", "This news story is great");
    expect(story.content).toEqual("This news story is great")
  })

  describe("getHeadline", function(){
    it("limits the headline to 50 characters", function(){
      var story = new Story("Today's news story is very exciting and very very long");
      expect(story.getHeadline()).toEqual("Today's news story is very exciting and very very ...")
    });
  });
});
