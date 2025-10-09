import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp( {
            "id": "com.ccb.longjiLife",
            "name": "建行生活",
            "groups": [
                {
                    "key": 1,
                    "name": "自动点击去食堂",
                    "desc": "在'我的'页面自动点击'去食堂'按钮区域",
                    "rules": [
                        {
                            "matches": [
                                "View[clickable=true] > TextView[text=\"去食堂\"]"
                            ],
                            "snapshotUrls": [
                                "https://i.gkd.li/i/1760009185220"
                            ],
                            "activityIds": [
                                "com.ccb.longjiLife.MainActivity"
                            ]
                        }
                    ]
                },
                {
                    "key": 2,
                    "name": "自动点我的",
                    "desc": "启用后自动点击“我的”按钮",
                    "rules": [
                        {
                            "matches": [
                                "[text=\"uOvpeAPT9AHD0AqD33ldupxzHcRzHcRzHmc0fBvgvDwgSRbcAAAAASUVORK5CYII=\"]"
                            ],
                            "activityIds": [
                                "com.ccb.longjiLife.MainActivity"
                            ]
                        }
                    ]
                }
            ]
        });
