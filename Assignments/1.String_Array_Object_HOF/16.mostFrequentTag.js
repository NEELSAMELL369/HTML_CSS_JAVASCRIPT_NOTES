function mostFrequentTag(data) {
    const tagCount = {};
  
    data.forEach(item => {
      if (typeof item === "string") {
        tagCount[item] = (tagCount[item] || 0) + 1;
      } else if (item.tags && Array.isArray(item.tags)) {
        item.tags.forEach(tag => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      }
    });
  
    let maxTag = null;
    let maxCount = 0;
  
    for (const tag in tagCount) {
      if (tagCount[tag] > maxCount) {
        maxTag = tag;
        maxCount = tagCount[tag];
      }
    }
  
    return maxTag;
  }
  
  
  const input = [
    "react",
    { tags: ["js", "frontend", "react"] },
    { tags: ["frontend", "css"] },
    "css",
    { tags: ["react", "js"] }
  ];
  
  console.log(mostFrequentTag(input)); 
  