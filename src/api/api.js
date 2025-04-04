import assets from "../assets/assets";
import thumbnail from "../assets/backgroung-image.jpg"

// const supabaseUrl = 'https://fwbqxyiqcjjtgjnweklw.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)


export const defaultPosts = [
    {
        id: "AEB12_1JDH", 
        title: "Coming of Superman",
        author: "Eleana Heera",
        context: "Discover the best places to visit in 2023 The atoms in liquid and solid states are held together by the forces of attraction. Since most of the materials used in engineering are solids and liquids, it is, therefore, desirable to understand the attractions that hold the atoms together. Such interatomic forces between the atoms are referred to as bonds. Without these interatomic and intermolecular forces, all matter would be in gaseous state due",
        thumbnail: thumbnail,
        isActive: false,
        date: "2025-03-28",
        category: "designs",
        reaction: {
            like: 90,
            dislike: 9,
            love: 80,
            hate: 7
        },
    },
    {
        id: "AEVB12_1JDH", 
        title: "My Lovely Update Launch",
        author: "Elvis O Jonathan",
        context: "Discover the best places to visit in 2023 The atoms in liquid and solid states are held together by the forces of attraction. Since most of the materials used in engineering are solids and liquids, it is, therefore, desirable to understand the attractions that hold the atoms together. Such interatomic forces between the atoms are referred to as bonds. Without these interatomic and intermolecular forces, all matter would be in gaseous state due",
        thumbnail: thumbnail,
        isActive: false,
        date: "2024-03-20",
        category: "designs",
        reaction: {
            like: 1111,
            dislike: 0,
            love: 701,
            hate: 0
        },
    },
    {
        id: "A12_1JDH", 
        title: "My title One Superman",
        author: "Elvis O Jonathan",
        context: "Discover the best places to visit in 2023 The atoms in liquid and solid states are held together by the forces of attraction. Since most of the materials used in engineering are solids and liquids, it is, therefore, desirable to understand the attractions that hold the atoms together. Such interatomic forces between the atoms are referred to as bonds. Without these interatomic and intermolecular forces, all matter would be in gaseous state due",
        thumbnail: thumbnail,
        isActive: false,
        created_at: "2025-03-26",
        category: "designs",
        reaction: {
            like: 90,
            dislike: 0,
            love: 267,
            hate: 10
        },
    },
    {
        id: "AEB1a2_1JDH",
        title: "My title 2",
        author: "Sublime Celestine",
        context: "I got a nice ANs of attraction. Since most of the materials used in engineering are solids and liquids, it is, therefore, desirable to understand the attractions that hold the atoms together. Such interatomic forces between the atoms are referred to as bonds. WithoD lovely context for the second description",
        thumbnail: thumbnail,
        isActive: false,
        date: "2025-03-27",
        category: "designs",
        reaction: {
            like: 897,
            dislike: 0,
            love: 112,
            hate: 0
        },
    }
]

export const defaultPostsComments =  [
    {
        id: "A12_1JDH",
        comments: [
            {
                id: "AB120",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AEB29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AB121",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 4,
                  dislike: 0,
                  love: 7,
                  hate: 0,
                }
            }
        ]
    },
    {
        id: "AEB12_1JDH",
        comments: [
            {
                id: "AB120",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AB121",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AB122",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 4,
                  dislike: 0,
                  love: 7,
                  hate: 0,
                }
            }
        ]
    },
    {
        id: "AEVB12_1JDH",
        comments: [
            {
                id: "AEB29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AEB29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AE29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 4,
                  dislike: 0,
                  love: 7,
                  hate: 0,
                }
            }
        ]
    },
    {
        id: "AEB1a2_1JDH",
        comments: [
            {
                id: "AEB29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AEB29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 0,
                  dislike: 0,
                  love: 0,
                  hate: 0,
                }
                
            },
            {
                id: "AE29",
                userIcon: assets.FlowerBg,
                user: "Sublime Drasisco",
                comment: "crystalline solid, the atoms are arranged in a definite pattern constantly repeated in three dimensions",
                date: Date(),
                reaction: {
                  like: 4,
                  dislike: 0,
                  love: 7,
                  hate: 0,
                }
            }
        ]
    },
]
