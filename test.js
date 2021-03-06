function findTheMost() {
    let nodeList = Array.from(document.all);

    let allLabelList = nodeList.map(node => node.tagName.toLowerCase());  //所有标签

    let labelList = new Set(allLabelList);  //去除重复的标签

    let mapList = new Map();

    //初始化标签出现的次数
    labelList.forEach(label => {
        mapList.set(label, 0)
    });

    //遍历所有标签并统计个数
    allLabelList.forEach(label => {
        mapList.set(label, mapList.get(label) + 1)
    });

    //获取出现最多标签的个数
    let theMost = [...mapList.values()].sort((a, b) => b - a)[0];

    return new Map([...mapList].filter(([key, val]) => val === theMost))
}

console.log(findTheMost())