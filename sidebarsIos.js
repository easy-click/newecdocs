module.exports = {
  // But you can create a sidebar manually
  iosdocs: [
    'readme',
    "zh-cn/device_solution",
    "zh-cn/changelog",
    "zh-cn/tools/download_resources",
    {
      type: 'category',
      label: '开发工具使用',
      link: {
        type: 'doc',
        id: 'zh-cn/tools/installreadme',
      },
      items: [
        'zh-cn/tools/signagent',
        'zh-cn/tools/installbridge',
        'zh-cn/tools/installcenter',
        'zh-cn/tools/installdevtools',
      ]
    },
  ]
};
