const contentMap = {
  sections: [
    {
      id: "game-hub",
      title: "游戏中心",
      tags: ["九游", "手游", "联运"],
      items: [
        { name: "仙剑奇侠传", category: "RPG" },
        { name: "荒野行动", category: "射击" },
      ],
    },
    {
      id: "news-feed",
      title: "最新资讯",
      tags: ["九游", "公告", "活动"],
      items: [
        { name: "九游夏季嘉年华", date: "2025-06-15" },
        { name: "版本更新预告", date: "2025-07-01" },
      ],
    },
    {
      id: "community",
      title: "玩家社区",
      tags: ["九游", "论坛", "攻略"],
      items: [
        { name: "新手必看攻略", author: "九游小编" },
        { name: "公会招募帖", author: "九游玩家" },
      ],
    },
  ],
  siteUrl: "https://chinese-main-jiuyou.com",
  keywords: ["九游", "游戏", "下载", "礼包"],
};

function searchContent(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  contentMap.sections.forEach((section) => {
    const tagMatch = section.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const itemMatch = section.items.some((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(lowerQuery)
      )
    );
    if (tagMatch || itemMatch) {
      results.push({
        sectionId: section.id,
        title: section.title,
        matchedItems: section.items.filter((item) =>
          Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(lowerQuery)
          )
        ),
      });
    }
  });
  return results;
}

function filterByTag(tag) {
  return contentMap.sections
    .filter((section) =>
      section.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .map((section) => ({
      sectionId: section.id,
      title: section.title,
      items: section.items,
    }));
}

function getSectionById(id) {
  return contentMap.sections.find((section) => section.id === id) || null;
}

export { contentMap, searchContent, filterByTag, getSectionById };