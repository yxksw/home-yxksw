// API 配置文件
// 请在此填写你的 API Token 和其他配置

const CONFIG = {
    // GitHub 配置
    GITHUB: {
        USERNAME: 'yxksw',
        TOKEN: ''  // 请填写 GitHub Personal Access Token，或在构建时通过环境变量注入
    },

    // Memos 配置
    MEMOS: {
        API_BASE: 'https://mastodon-api.050815.xyz/api/v1/memo',
        TOKEN: ''  // 如果 Memos API 需要认证，请填写 Token
    },

    // 文章 API 配置
    ARTICLES: {
        URL: "",
        Method: "post",
        Headers: {
            "Accept": "application/json, text/plain, */*",
        },
        Body: {
            meta: {
                ds: "文章 get",
                table: "posts",
                action: "r",
                filters: {},
            }
        }
    }
};

// 导出配置（兼容不同模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
