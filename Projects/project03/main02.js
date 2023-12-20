console.log('this works');

const flowers = [
    {
        name: "琵琶语 Hai Lin",
        type: "gentle",
        image:
        "https://private-user-images.githubusercontent.com/144858762/286437914-d945f542-453c-4a2a-9c2a-3bc72f6dc1b0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3NTExNDgsIm5iZiI6MTcwMjc1MDg0OCwicGF0aCI6Ii8xNDQ4NTg3NjIvMjg2NDM3OTE0LWQ5NDVmNTQyLTQ1M2MtNGEyYS05YzJhLTNiYzcyZjZkYzFiMC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxNlQxODIwNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NTc2YzZmZDc4MjNiMDg1OWM0MDE1MTVhMTRkMDM2ZWEwYjY0ZDg5MDAzMjI1Mjk5Nzk1YzQ0Mjk3MDEwZTJkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gjdmUubEaIMhu_mJbTrRf6c1RrpEsuTH-q_6RsY9-ps"
    },
    {
        name: "青花瓷 Lin Ma",
        type: "modern",
        image: "https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/28416aa6-4979-472b-9594-3628e39c8b96"
    },
    {
        name: "象王行 Qingyao Liu",
        type: "military",
        image:
        "https://github.com/HeqiaoMeng/hm2995CodingClass/assets/144858762/2513d2db-7f9a-41ca-9fed-80f99a3b7709"
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