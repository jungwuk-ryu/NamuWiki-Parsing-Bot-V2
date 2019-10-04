var command_namu = "/나무위키";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (msg.indexOf(command_namu) == 0) {
    try {
      var keyword = msg.trim().substring(command_namu.length + 1);
      var encoded_keyword = encodeURI(keyword);
      var search = Utils.getWebText("https://namu.wiki/search/" + encoded_keyword);
      search = search.split('<i class="ion-md-document')[1];
      search = search.split('<a href="')[1];
      search = search.split('"')[0];
      keyword = decodeURI(search.split("w/")[1]);
      var temp = Utils.getWebText("https://namu.wiki" + search);
      var contents = temp.split('<div class="wiki-heading-content">')[1].split('<h2 class="wiki-heading">')[0].replace(/(<([^>]+)>)/g, "").trim();
      replier.reply(keyword + "에 대한 결과입니다.\n" + contents + "\n\n자세한내용은" + "https://namu.wiki/w/" + encoded_keyword + "을 참고해주세요");
    } catch (e) {
      replier.reply("나무위키에서 " + keyword + "을(를) 찾을 수 없거나 오류가 있습니다.");
    }
  }
}
