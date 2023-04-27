/**
 * Tokens and their addresses and decimals of ETH mainnet
 */
module.exports = [
    {
        network: 'homestead',
        chainId: '1',
        apiUrl: 'https://api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: 'ETH',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'USDT',
                address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                decimals: 6
            } ,
            {
                symbol: 'USDC',
                address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                decimals: 6
            },
            {
                symbol: 'BUSD',
                address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
                decimals: 18
            },
            {
                symbol: 'DAI',
                address: '0x6b175474e89094c44da98b954eedeac495271d0f',
                decimals: 18
            },
            {
                symbol: 'USDP',
                address: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
                decimals: 18
            },
            {
                symbol: 'TUSD',
                address: '0x0000000000085d4780b73119b644ae5ecd22b376',
                decimals: 18
            },
            {
                symbol: 'GUSD',
                address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
                decimals: 2
            },
            {
                symbol: 'FRAX',
                address: '0x853d955acef822db058eb8505911ed77F175b99e',
                decimals: 18
            },
            {
                symbol: 'LUSD',
                address: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
                decimals: 18
            },
            {
                symbol: 'MUSD',
                address: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0x8d6cebd76f18e1558d4db88138e2defb3909fad6',
                decimals: 18
            },
            {
                symbol: 'STAKE',
                address: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
                decimals: 18
            },
            {
                symbol: 'ALUSD',
                address: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
                decimals: 18
            },
            {
                symbol: 'FEI',
                address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6',
                decimals: 18
            },
            {
                symbol: 'MIM',
                address: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
                decimals: 18
            },
        ]
    },
    {
        network: 'polygon',
        chainId: '137',
        apiUrl: 'https://polygon.api.0x.org/',
        defaultRpc: 'https://polygon-rpc.com/',
        arbAddress: '0x34485f25bac528628ece186eac6c32e38ea75d12',
        proxyAddress: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
        orderbookAddress: '0x2de560ed9ba8a6cdfe92e26862ecb86e6e2d9705' ,
        interpreterAddress: '0xc318bd7dBdAC1cE35aa4aA1443B41C53246c60e2' ,
        nativeToken: {
            symbol: 'MATIC',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'USDT',
                address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
                decimals: 6
            } ,
            {
                symbol: 'USDC',
                address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
                decimals: 6
            },
            {
                symbol: 'BUSD',
                address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
                decimals: 18
            },
            {
                symbol: 'BUSD',
                address: '0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7',
                decimals: 18
            },
            {
                symbol: 'DAI',
                address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
                decimals: 18
            },
            {
                symbol: 'TUSD',
                address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
                decimals: 18
            },
            {
                symbol: 'GUSD',
                address: '0xc8a94a3d3d2dabc3c1caffffdca6a7543c3e3e65',
                decimals: 2
            },
            {
                symbol: 'FRAX',
                address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
                decimals: 18
            },
            {
                symbol: 'MUSD',
                address: '0xe840b73e5287865eec17d250bfb1536704b43b21',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
                decimals: 18
            },
            {
                symbol: 'STAKE',
                address: '0xeb5c9e515629b725d3588a55e2a43964dcfde8ca',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0xffa4d863c96e743a2e1513824ea006b8d0353c57',
                decimals: 18
            },
        ]
    },
    {
        network: 'avalanche',
        chainId: '43114',
        apiUrl: 'https://avalanche.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: 'AVAX',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'USDT.e',
                address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
                decimals: 6
            },
            {
                symbol: 'USDt',
                address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
                decimals: 6
            },
            {
                symbol: 'USDC.e',
                address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
                decimals: 6
            },
            {
                symbol: 'USDC',
                address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
                decimals: 6
            },
            {
                symbol: 'BUSD.e',
                address: '0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98',
                decimals: 18
            },
            {
                symbol: 'BUSD',
                address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
                decimals: 18
            },
            {
                symbol: 'DAI.e',
                address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
                decimals: 18
            },
            {
                symbol: 'TUSD',
                address: '0x1c20e891bab6b1727d14da358fae2984ed9b59eb',
                decimals: 18
            },
            {
                symbol: 'FRAX',
                address: '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0x5c49b268c9841aff1cc3b0a418ff5c3442ee3f3b',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0xcf799767d366d789e8B446981C2D578E241fa25c',
                decimals: 18
            },
            {
                symbol: 'MIM',
                address: '0x130966628846bfd36ff31a822705796e8cb8c18d',
                decimals: 18
            },
        ]
    },
    {
        network: 'arbitrum',
        chainId: '42161',
        apiUrl: 'https://arbitrum.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: 'ETH',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'USDT',
                address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
                decimals: 6
            } ,
            {
                symbol: 'USDC',
                address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
                decimals: 6
            },
            {
                symbol: 'DAI',
                address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
                decimals: 18
            },
            {
                symbol: 'TUSD',
                address: '0x4d15a3a2286d883af0aa1b3f21367843fac63e07',
                decimals: 18
            },
            {
                symbol: 'FRAX',
                address: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
                decimals: 18
            },
            {
                symbol: 'FEI',
                address: '0x4a717522566c7a09fd2774ccedc5a8c43c5f9fd2',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0x680447595e8b7b3aa1b43beb9f6098c79ac2ab3f',
                decimals: 18
            },
            {
                symbol: 'MIM',
                address: '0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a',
                decimals: 18
            },
        ]
    },
    {
        network: 'fantom',
        chainId: '250',
        apiUrl: 'https://fantom.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: 'FTM',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'fUSDT',
                address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
                decimals: 6
            } ,
            {
                symbol: 'USDC',
                address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
                decimals: 6
            },
            {
                symbol: 'gfUSDT',
                address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
                decimals: 6
            },
            {
                symbol: 'DAI',
                address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
                decimals: 18
            },
            {
                symbol: 'gUSDC',
                address: '0xe578c856933d8e1082740bf7661e379aa2a30b26',
                decimals: 6
            },
            {
                symbol: 'TUSD',
                address: '0x9879abdea01a879644185341f7af7d8343556b7a',
                decimals: 18
            },
            {
                symbol: 'FRAX',
                address: '0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0xfb98b335551a418cd0737375a2ea0ded62ea213b',
                decimals: 18
            },
            {
                symbol: 'ALUSD',
                address: '0xB67FA6deFCe4042070Eb1ae1511Dcd6dcc6a532E',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0xcf799767d366d789e8B446981C2D578E241fa25c',
                decimals: 18
            },
            {
                symbol: 'MIM',
                address: '0x82f0b8b456c1a451378467398982d4834b6829c1',
                decimals: 18
            },
        ]
    },
    {
        network: 'bsc',
        chainId: '56',
        apiUrl: 'https://bsc.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: 'BNB',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18
        },
        trackedTokens: [
            {
                symbol: 'USDT',
                address: '0x55d398326f99059ff775485246999027b3197955',
                decimals: 18
            } ,
            {
                symbol: 'USDC',
                address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                decimals: 18
            },
            {
                symbol: 'BUSD',
                address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                decimals: 18
            },
            {
                symbol: 'DAI',
                address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
                decimals: 18
            },
            {
                symbol: 'USDP',
                address: '0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f',
                decimals: 18
            },
            {
                symbol: 'TUSD',
                address: '0x14016e85a25aeb13065688cafb43044c2ef86784',
                decimals: 18
            },
            {
                symbol: 'FRAX',
                address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
                decimals: 18
            },
            {
                symbol: 'MAI',
                address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
                decimals: 18
            },
            {
                symbol: 'STAKE',
                address: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
                decimals: 18
            },
            {
                symbol: 'USDD',
                address: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
                decimals: 18
            },
            {
                symbol: 'MIM',
                address: '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba',
                decimals: 18
            },
        ]
    },
    {
        network: 'celo',
        chainId: '42220',
        apiUrl: 'https://celo.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: '',
            address: '',
            decimals: ''
        },
        trackedTokens: [
            {
                symbol: 'MAI',
                address: '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC',
                decimals: 18
            }
        ]
    },
    {
        network: 'optimism',
        chainId: '',
        apiUrl: 'https://optimism.api.0x.org/',
        defaultRpc: '',
        arbAddress: '',
        proxyAddress: '',
        nativeToken: {
            symbol: '',
            address: '',
            decimals: ''
        },
        trackedTokens: {

        }
    }
] 