module.exports = {
  // But you can create a sidebar manually
  iostjdocs: [
    'index',
    "zh-cn/changelog",
    "zh-cn/tools/download_resources",
    {
      type: 'category',
      label: '安装开发工具',
      link: {
        type: 'doc',
        id: 'zh-cn/tools/installreadme',
      },
      items: [
        'zh-cn/tools/signagent',
        'zh-cn/tools/installdevtools',
      ]
    },
    "zh-cn/firstproject",
    {
      type: 'category',
      label: '脚本函数',
      link: {
        type: 'doc',
        id: 'zh-cn/funcs',
      },
      items: [
        'zh-cn/funcs/global/global',
        'zh-cn/funcs/global/global-shortcut',
        'zh-cn/funcs/node-api',
        'zh-cn/funcs/image-api',
        'zh-cn/funcs/ocr-api',
        'zh-cn/funcs/device-api',
        'zh-cn/funcs/file-api',
        'zh-cn/funcs/http-api',
        'zh-cn/funcs/tjcenter-api',
        'zh-cn/funcs/worker-api',
        'zh-cn/funcs/utils-api',
        'zh-cn/funcs/ecloud-tj-api',
      ]
    },
    {
      type: 'category',
      label: 'UI编写',
      link: {
        type: 'doc',
        id: 'zh-cn/funcs/ui/index',
      },
      items: [
        'zh-cn/funcs/ui/ui-js-inter',
      ]
    },
    {
      type: 'category',
      label: '高级功能',
      link: {
        type: 'doc',
        id: 'zh-cn/advance/index',
      },
      items: [
        'zh-cn/advance/tjcenter',
        'zh-cn/advance/pkgipa',
        'zh-cn/advance/hotupdate',
        'zh-cn/advance/openapi',
        'zh-cn/advance/jsobfuscator',

      ]
    },
    "zh-cn/question-answer",
    "zh-cn/joinus",
  ]
};
