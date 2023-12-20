console.log('this works');

const flowers = [
    {
        name: "琵琶语 Hai Lin",
        type: "gentle",
        image:"https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/d465b3ff-3ffe-46a6-a424-ea96ea793ae1"
    },
    {
        name: "青花瓷 Lin Ma",
        type: "modern",
        image: "https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/28416aa6-4979-472b-9594-3628e39c8b96"
    },
    {
        name: "象王行 Qingyao Liu",
        type: "military",
        image:"https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/2513d2db-7f9a-41ca-9fed-80f99a3b7709"
    },
    {
        name: "十面埋伏 Jinlong Fang",
        type: "military",
        image:
        "https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/31985006-d1e7-4cfe-beda-132e60f6043a"
    },
    {
        name: "彝族舞曲 Yuchun Yuan",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1txmWqp617t8jvovKUl-QLyBRVhGIquQR"
    },
    {
        name: "金蛇狂舞 Dehai Liu",
        type: "military",
        image: "https://docs.google.com/uc?export=download&id=1jl3G0bD2VdMgjRqwX6dMaP25wzFVT0Le"
    },
    {
        name: "欢沁 Hai Lin",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1ZxoEPZMZnlbP0nlBAZV39K1e0QkbqqWX"
    },
    {
        name: "红颜旧 Ziyue Cai",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1QN7l6G-1QoNsGb72IRpit0e_PRFu0Lgb"
    },
    {
        name: "雪落下的声音 Ziyue Cai",
        type: "moderm",
        image: "https://docs.google.com/uc?export=download&id=1rX1Iu3sc84gyKuTQmy7L6UQwiuvHRjVf"
    },
    {
        name: "左手指月 Ziyue Cai",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1mFRMkRt9CJqC2UspRBzvX062Ocb9P-4w"
    },
    {
        name: "琶琶行 Yin Chen",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=12ago5R_MZEuU-lXQaw2W2fPKhj-n2ICT"
    },
    {
        name: "琵琶怨 Weibiao Deng",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1D5EXScdcwUXjqO1Zl9YoQKdqErG7MHDu"
    },
    {
        name: "爱情买卖 Xiaoqi Cai",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1ajMcm_eU3cWvNjH3LHMZPVrjuKmuAmZ2"
    },
    {
        name: "梦 Xiaolin Dong",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=19e05Ipg42hLqJUqSnlv8JCWNPqdKzAkh"
    },
    {
        name: "小月儿高 Shufeng He",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1ecZFD6H9i1qr1fCOYT0DkVZYmrQcIiAf"
    },
    {
        name: "绿腰 Ting Jiang",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1sBSrXmR8W9TW6uZBWwfERB96EZIyDKtg"
    },
    {
        name: "青莲乐府 Yu Kuang",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1ndYWS-GvmmO61qm-S5ALrpA45EOd9aVN"
    },
    {
        name: "三六 Guangzu Li",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1XBq5m56YrdptE39EkeID97zKQbMjvRlR"
    },
    {
        name: "天池 Zhumei Li",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1NWqAdoAH7CLK75_FtjttCPBZ5CKHsSJa"
    },
    {
        name: "霸王卸甲 Shicheng Lin",
        type: "military",
        image: "https://docs.google.com/uc?export=download&id=1r9B6ZZsR32hDlxIl2wmw86I9-bKrHhVL"
    },
    {
        name: "陈杏元和番 Shicheng Lin",
        type: "military",
        image: "https://docs.google.com/uc?export=download&id=1wCnEMofgZ_i2A-lniRklt6afk0lDdUfE"
    },
    {
        name: "青莲乐府 Shicheng Lin",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1Tt2XbUjXNRrTrmlpJoN7ZdITcEBpQ3Yn"
    },
    {
        name: "思春 古曲 Shicheng Lin",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1kkiYFgW2gVg_TQTpyh4xtwLyKIMVmVAt"
    },
    {
        name: "傍妆台 Dehai Liu",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1LzXFO80BSd9GxLP2iCIxXgxXMDE1WgKE"
    },
    {
        name: "大浪淘沙 Dehai Liu",
        type: "military",
        image: "https://docs.google.com/uc?export=download&id=1RJ-NgyuYYXPUzU39y-nsRcJxugUCLeBY"
    },
    {
        name: "梅花三弄 Dehai Liu",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1Ut2AsfUwDNzWpCXVTJ4q1Di0VDmlPHpQ"
    },
    {
        name: "塞上曲 Dehai Liu",
        type: "military",
        image: "https://docs.google.com/uc?export=download&id=1e7Pl45HEkMMrbIAAns9wiCoIZESFujkc"
    },
    {
        name: "疏影 Dehai Liu",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=1cNmyA8PkWt_AW0KOJHpsK_e_t9yJ1xb2"
    },
    {
        name: "杏花天影 Dehai Liu",
        type: "gentle",
        image: "https://docs.google.com/uc?export=download&id=1TgDur1ofB47uEHzobWOAKIL-Dgwx45Yr"
    },
    {
        name: "扬州慢 Dehai Liu",
        type: "modern",
        image: "https://docs.google.com/uc?export=download&id=17ZnZoPDausX0xt7VpfulBZFcuLLhmprX"
    }
];

// grab the ul
const ul = document.querySelector('ul');
const filterBtns = document.querySelector('.filters')
const cards = document.getElementsByClassName('card');

// write function
const renderFlowersToPage = (items) => {
    for(let i = 0; i < items.length; i++){
        // console.log(items[i]);

        // create a list item
        let list_item = document.createElement("li");
        list_item.classList.add("card", flowers[i].type, `item--${i + 1}`)
        // flower name
        let title = document.createElement("h3");
        title.textContent = flowers[i].name;
        // flower type
        let type = document.createElement("p");
        type.textContent = flowers[i].type;
        // flower image
        let image = document.createElement("img");
        image.setAttribute("src", flowers[i].image);

        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(type)
        list_item.appendChild(image  )
    }
}
// pass data into it
renderFlowersToPage(flowers)



// filter flowers by type function
const filterFn = (event) => {
    // console.log(event)
    console.log(event.target)

    if(event.target.classList.contains('filter-btn')){
        let active = filterBtns.querySelector('.active');
        active.classList.remove('active');

        event.target.classList.add('active');

        const filterValue = event.target.getAttribute("data-filter")
        console.log(filterValue) // modern, gentle

        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains(filterValue)  || filterValue === "all"){
                cards[i].classList.remove('hide');
                cards[i].classList.add('show');
            } else {
                cards[i].classList.remove('show');
                cards[i].classList.add('hide');
            }
        }
    }
}

filterBtns.addEventListener('click', filterFn)