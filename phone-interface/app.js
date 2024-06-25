//this is for lockscreen date
let lockscreen_date = document.querySelector(".lockscreen_date p");

let date = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateofmonth = date.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let currDate = days[date.getDay()] + ", " + dateofmonth + " " + months[date.getMonth()];
lockscreen_date.innerHTML = currDate;


//this is for lockscreen time
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");

if (date.getHours() < 10) {
    hour.innerHTML = "0" + date.getHours();
}
else {
    hour.innerHTML = date.getHours();
}
if (date.getMinutes() < 10) {
    minute.innerHTML = "0" + date.getMinutes()
}
else {
    minute.innerHTML = date.getMinutes();
}

//this is for lockscreen_passwordscreen
let lockscreen = document.querySelector(".lockscreen");
let lockscreen_passwordscreen = document.querySelector(".lockscreen_passwordscreen");
let lockscreen_downarrow = document.querySelector(".lockscreen_downarrow i");

lockscreen.addEventListener('click', () => {
    lockscreen_passwordscreen.classList.remove("none");
    lockscreen_passwordscreen.classList.remove("minimize");
});

lockscreen_downarrow.addEventListener('click', () => {
    lockscreen_passwordscreen.classList.add("minimize");
});


//this is for lockscreen unlock functionality 
let lockscreen_passwordscreen_unlockBTN = document.querySelector(".lockscreen_passwordscreen_unlockBTN button");
let lockscreen_passwordscreen_password = document.querySelector(".lockscreen_passwordscreen_password input");
let errormsg = document.querySelector(".errormsg");
let homescreen = document.querySelector(".homescreen")
lockscreen_passwordscreen_unlockBTN.addEventListener('click', () => {
    let password = localStorage.getItem('password');
    if(password){
        if (lockscreen_passwordscreen_password.value == password) {
        
            lockscreen_passwordscreen.classList.add("minimize");
            
            setTimeout(() => {
                homescreen.classList.remove("none")
            }, 100)
            
        }
    }
    if (!password && lockscreen_passwordscreen_password.value == "1234") {
        
        lockscreen_passwordscreen.classList.add("minimize");
        
        setTimeout(() => {
            homescreen.classList.remove("none")
        }, 100)
        
    }
    else {
        errormsg.classList.remove("none")
    }
    
    
})

lockscreen_passwordscreen_password.addEventListener('keydown', () => {
    errormsg.classList.add("none")
})



//for setting app
let setting = document.querySelector("#setting");
let setting_window = document.querySelector('.setting_window');
let setting_window_adv = document.querySelector('.setting_window_adv');
let back_btn = document.querySelector('.back_btn i');
setting.addEventListener('click',()=>{
    setting_window.classList.remove("none")
    setTimeout(()=>{
        setting_window_adv.classList.remove("minimize")
        setting_window_adv.classList.remove("none")
    },1200)
    
})
back_btn.addEventListener('click',()=>{
    setting_window_adv.classList.add("minimize")
    setting_window.classList.add("none")
    
    
})






//this is for display detail
let setting_window_adv_feautures = document.querySelectorAll('.setting_window_adv_feautures div');
setting_window_adv_feautures.forEach((it)=>{
    it.addEventListener('click',()=>{
        
        let anyWindow = document.querySelector(`.${it.id}-detail`);
        
        if(anyWindow){
            anyWindow.classList.remove("none");
            anyWindow.classList.add("slideRight");
            anyWindow.classList.remove("slideleft");
            
            //this is for Display-detail_back
            let anyWindow_back = document.querySelector(`.${it.id}-detail_back i`)
            let anyWindow_back2 = document.querySelector('.Display1 .Display-detail_back i')
          
            anyWindow_back.addEventListener('click',()=>{
                anyWindow.style.zIndex = '0'
                console.log('helo');
                anyWindow.classList.add("slideleft");
                
                
                
            })
        }
    });
});


//this is for brightnes level

let percentage = document.querySelector(".percentage")
let Display_detail = document.querySelector(".Display-detail")
let seekbar_lenght = document.querySelector(".seekbar-lenght")
let seekbar = document.querySelector(".seekbar")
let prec = 0;

seekbar_lenght.addEventListener('click',(event)=>{
    let width = event.offsetX + 1;
    seekbar.style.width = width + "px";
    prec = (width / 210);
    let num = prec * 100;
    Display_detail.style.filter = `brightness(${num}%)`;
    percentage.innerHTML = `${Math.floor(num)}%`
    
})

//this is for Display-detail-brightness
let Display_detail_brightness = document.querySelector(".Display-detail-brightness")
let slider = document.querySelector(".slider")
let flag = 1;
Display_detail_brightness.addEventListener('click',()=>{
    if(flag){
        slider.classList.remove("none")
        flag = 0;
        
    }
    else{
        slider.classList.add("none")
        flag = 1;
    }
})


//for toogle of drak theme
let circle = document.querySelector(".circle");
let toogle = document.querySelector(".toogle");
let Display_detail_back = document.querySelector('.Display-detail_back i');
let setting_window_adv_feauture = document.querySelector('.setting_window_adv_feautures');
let allIcons = document.querySelectorAll('.setting_window_adv_feautures i');
let searchI = document.querySelector('.search i');



let Wallpaper_detail = document.querySelector('.Wallpaper-detail')
let Wallpaper_detail_back = document.querySelector('.Wallpaper-detail_back i')
let wallpaer_box = document.querySelector('.wallpaer-box')
let wallpaer_dynamic = document.querySelector('.wallpaer-dynamic')
let wallpaer_dynamic_detail = document.querySelector(".wallpaer-dynamic_detail")
let wallpaer_dynamic_detail_i = document.querySelector(".wallpaer-dynamic_detail i")
let wallpaer_dynamic_detail_wallpaper_adv_i = document.querySelector('.wallpaer-dynamic_detail_wallpaper_adv i')
let setwallpaper_window = document.querySelector('.setwallpaper_window');
let twoOptions_i = document.querySelectorAll(".twoOptions i");
let successMsg_btn = document.querySelector(".successMsg button")
let search = document.querySelector('.search')

let Battery_detail = document.querySelector('.Battery-detail')
let Battery_detail_back = document.querySelector('.Battery-detail_back i')

let Password_detail = document.querySelector('.Password-detail')
let Password_detail_back = document.querySelector('.Password-detail_back i')
let change_password_detail_back_i = document.querySelector('.change_password_detail_back i')
let change_password_detail = document.querySelector('.change_password_detail')
let change_password_detail_lock_i = document.querySelector('.change_password_detail .lock i')

let Special_detail = document.querySelector('.Special-detail')
let Special_detail_back = document.querySelector('.Special-detail_back i')

let Update_detail = document.querySelector('.Update-detail')
let Update_detail_back = document.querySelector('.Update-detail_back i')

let About_detail = document.querySelector('.About-detail')
let About_detail_back = document.querySelector('.About-detail_back i')

let check2 = 1;
// localStorage.setItem("checkForDrakTheme", false)

toogle.addEventListener('click',()=>{
    if(check2){
        
        localStorage.setItem("checkForDrakTheme",true)
        
        lockscreen_passwordscreen.style.backgroundColor = "#111"
        lockscreen_passwordscreen.style.color = "white"
        lockscreen_passwordscreen_password.style.backgroundColor = "#111"
        lockscreen_passwordscreen_password.style.borderBottom = "2px solid white"
        
        circle.style.marginLeft = '15px';
        check2 = 0;
        let Display_detail = document.querySelector('.Display-detail');
        Display_detail.style.backgroundColor = "#111"
        Display_detail.style.color = "white";
        Display_detail_back.style.color = "white"
        toogle.style.backgroundColor = "#38c3f5"
        
        setting_window_adv.style.backgroundColor = "#111"
        setting_window_adv.style.color = "white"
        setting_window_adv_feauture.style.backgroundColor = '#222'
        setting_window_adv_feauture.style.color = 'white'
        allIcons.forEach((it)=>{
            it.style.color = "white"
        })
        search.style.backgroundColor = "#222"
        searchI.style.color = "white"
        back_btn.style.color = "white"
        setting_window.style.backgroundColor = "#111"
        
        Wallpaper_detail.style.backgroundColor = "#111"
        Wallpaper_detail.style.color = "white";
        Wallpaper_detail_back.style.color = "white"  
        wallpaer_box.style.backgroundColor = '#222';
        wallpaer_dynamic.style.backgroundColor = '#222';
        wallpaer_dynamic_detail.style.backgroundColor = '#111';
        wallpaer_dynamic_detail.style.color = 'white';
        wallpaer_dynamic_detail_i.style.color = 'white'
        wallpaer_dynamic_detail_wallpaper_adv_i.style.color = 'white'
        setwallpaper_window.style.backgroundColor = "#222"
        setwallpaper_window.style.color = "white"
        twoOptions_i.forEach((item)=> item.style.color = "white")
        successMsg_btn.style.backgroundColor = "#222"
        successMsg_btn.style.color = "white"
        
        Battery_detail.style.backgroundColor = "#111"
        Battery_detail.style.color = "white";
        Battery_detail_back.style.color = "white"  
        
        Password_detail.style.backgroundColor = "#111"
        Password_detail.style.color = "white";
        Password_detail_back.style.color = "white"
        change_password_detail.style.backgroundColor = '#111'
        change_password_detail_back_i.style.color = "white"
        change_password_detail_lock_i.style.color = "white"
        change_password_detail.backgroundColor = '#111'
        change_password_detail_setPassword.style.backgroundColor = "#111"
        change_password_detail_setPassword_i.style.color = "white"
        change_password_detail_setPassword_input.style.borderBottom = "2px solid white"
        
        
        
        Special_detail.style.backgroundColor = "#111"
        Special_detail.style.color = "white";
        Special_detail_back.style.color = "white"  
        
        Update_detail.style.backgroundColor = "#111"
        Update_detail.style.color = "white";
        Update_detail_back.style.color = "white"  
        
        About_detail.style.backgroundColor = "#111"
        About_detail.style.color = "white";
        About_detail_back.style.color = "white"
    }
    else{
        localStorage.setItem("checkForDrakTheme", false)
        
        lockscreen_passwordscreen.style.backgroundColor = "#ece6ed"
        lockscreen_passwordscreen.style.color = "black"
        
        circle.style.marginLeft = '0px';
        check2 = 1;
        let Display_detail = document.querySelector('.Display-detail');
        Display_detail.style.backgroundColor = "#ece6ed"
        Display_detail.style.color = "black"
        Display_detail_back.style.color = "black"
        toogle.style.backgroundColor = "grey"
        
        setting_window_adv.style.backgroundColor = "#ece6ed"
        setting_window_adv.style.color = "black"
        setting_window_adv_feauture.style.backgroundColor = 'white'
        setting_window_adv_feauture.style.color = 'black'
        allIcons.forEach((it)=>{
            it.style.color = "black"
        })
        search.style.backgroundColor = "white"
        searchI.style.color = "black"
        back_btn.style.color = "black"
        setting_window.style.backgroundColor = "#ece6ed"
        
        
        Wallpaper_detail.style.backgroundColor = "#ece6ed"
        Wallpaper_detail.style.color = "black";
        Wallpaper_detail_back.style.color = "black" 
        wallpaer_box.style.backgroundColor = 'white';
        wallpaer_dynamic.style.backgroundColor = 'white';  
        wallpaer_dynamic_detail.style.backgroundColor = '#ece6ed';
        wallpaer_dynamic_detail.style.color = 'black';   
        wallpaer_dynamic_detail_i.style.color = 'black'
        wallpaer_dynamic_detail_wallpaper_adv_i.style.color = 'black'
        setwallpaper_window.style.backgroundColor = "#ece6ed"
        setwallpaper_window.style.color = "black"
        twoOptions_i.forEach((item)=> item.style.color = "black")
        successMsg_btn.style.backgroundColor = "white"
        successMsg_btn.style.color = "black"
        
        Battery_detail.style.backgroundColor = "#ece6ed"
        Battery_detail.style.color = "black";
        Battery_detail_back.style.color = "black"  
        
        Password_detail.style.backgroundColor = "#ece6ed"
        Password_detail.style.color = "black";
        Password_detail_back.style.color = "black"  
        change_password_detail.style.backgroundColor = '#ece6ed'
        change_password_detail_back_i.style.color = "black"
        change_password_detail_lock_i.style.color = "black"
        change_password_detail_setPassword.style.backgroundColor = "#ece6ed"
        change_password_detail_setPassword_i.style.color = "black"
        change_password_detail_setPassword_input.style.borderBottom = "2px solid black"
        
        Special_detail.style.backgroundColor = "#ece6ed"
        Special_detail.style.color = "black";
        Special_detail_back.style.color = "black"  
        
        Update_detail.style.backgroundColor = "#ece6ed"
        Update_detail.style.color = "black";
        Update_detail_back.style.color = "black"
        
        About_detail.style.backgroundColor = "#ece6ed"
        About_detail.style.color = "black";
        About_detail_back.style.color = "black"
    }
})



// this is for Display-detail_colors
let Display_detail_colors_adv = document.querySelector('.Display-detail_colors_adv')
let Display_detail_colors = document.querySelector('.Display-detail_colors');
let Display_detail_colors_adv_back = document.querySelector('.Display-detail_colors_adv_back i');
Display_detail_colors.addEventListener('click',()=>{
    Display_detail_colors_adv.classList.remove("none");
    Display_detail_colors_adv.classList.add("slideRight");
    Display_detail_colors_adv.classList.remove("slideleft");
}) 
// Display_detail_colors_adv_back.addEventListener('click',()=>{
    
    // })
    Display_detail_colors_adv_back.addEventListener('click',()=>{
        // Display_detail_colors_adv.classList.add("")
        // anyWindow.classList.remove("none");
        Display_detail_colors_adv.classList.add("slideleft");
    })
    
    let Nop = document.querySelector('.Nop');
    let inner_circle = document.querySelector('.inner-circle');
    Nop.addEventListener('click',()=>{
        inner_circle.classList.remove("none");
        Nop.style.border = "1px solid #38c3f5"
    })
    
    
    
    //for wallpaper dynamic
    let wallpaer_dynamic_detail_back = document.querySelector(".wallpaer-dynamic_detail_back i")
    wallpaer_dynamic.addEventListener('click',()=>{
        // wallpaer_dynamic.backgroundColor= 'blue';
        // console.log("hello");
        wallpaer_dynamic_detail.classList.remove("none")
        wallpaer_dynamic_detail.classList.add('slideRight')
        wallpaer_dynamic_detail.classList.remove('slideleft')
        
        
    })
    wallpaer_dynamic_detail_back.addEventListener("click",()=>{
        // wallpaer_dynamic_detail.classList.remove('slideRight')
        wallpaer_dynamic_detail.classList.add('slideleft')
        // wallpaer_dynamic_detail.classList.remove('slideRight')
    })
    
    let mysrc = "https://wallpapercg.com/download/motorola-edge-40--14911.jpg";
    let wallpaer_dynamic_detail_wallpaper = document.querySelectorAll('.wallpaer-dynamic_detail_wallpaper img')
    let wallpaer_dynamic_detail_wallpaper_adv = document.querySelector('.wallpaer-dynamic_detail_wallpaper_adv')
    let wallpaer_dynamic_detail_wallpaper_adv_img = document.querySelector('.wallpaer-dynamic_detail_wallpaper_adv img')
    wallpaer_dynamic_detail_wallpaper.forEach((item)=>{
        item.addEventListener('click',(target)=>{
            wallpaer_dynamic_detail_wallpaper_adv_img.src = target.srcElement.currentSrc
            mysrc = target.srcElement.currentSrc;
            wallpaer_dynamic_detail_wallpaper_adv.classList.remove('none')
        })
    })
    let checker = 1;
    wallpaer_dynamic_detail_wallpaper_adv_i.addEventListener('click',()=>{
        wallpaer_dynamic_detail_wallpaper_adv.classList.add('none')
        setwallpaper_window.classList.add('none')
        checker = 1;
        
    })
    
    let wallpaer_dynamic_detail_wallpaper_adv_setBtn = document.querySelector('.wallpaer-dynamic_detail_wallpaper_adv_setBtn button');
    wallpaer_dynamic_detail_wallpaper_adv_setBtn.addEventListener('click',()=>{
        if(checker){
            
            setwallpaper_window.classList.remove('none')
            setwallpaper_window.style.boxShadow = "100px 10px 20px rgba(0, 0, 0, 0.3)";
            checker = 0; 
            
        }
    else{
        setwallpaper_window.classList.add('none')
        setwallpaper_window.style.boxShadow = "100px 10px 20px rgba(0, 0, 0, 0.3)";
        checker = 1;
    }
})


//for set home screen and lockscreen wallpaper
let option1 = document.querySelector('.option1')
let option2 = document.querySelector('.option2')
let homescreen_wallpaper_img = document.querySelector('.homescreen_wallpaper img')
let lockscreen_wallpaper_img = document.querySelector('.lockscreen_wallpaper img')

// let setwallpaper_window = document.querySelector('.setwallpaper_window');
// let wallpaer_box = document.querySelector
let successMsg = document.querySelector('.successMsg')
let wallpaer_box_all = document.querySelectorAll(".wallpaer-box img")
let changeLockscreen = document.querySelector(".changeLockscreen");
let changeHomescreen = document.querySelector(".changeHomescreen");
option1.addEventListener('click',()=>{
    localStorage.setItem("homeSrc", mysrc);
    homescreen_wallpaper_img.src = mysrc;
    wallpaer_dynamic_detail_wallpaper_adv.classList.add("none")
    successMsg.classList.remove('none')
    setwallpaper_window.classList.add('none')
    successMsg.classList.add('pop-animation')
    
    // wallpaer_box_all.forEach((item)=>{
        //     item.src = mysrc
        // })
        changeLockscreen.src = mysrc
        setTimeout(()=>{
            
            successMsg.classList.add('none')
        },2000)
        checker = 1;
    })
    
    // let wallpaer_dynamic_detail_wallpaper_adv = document.querySelector('.wallpaer-dynamic_detail_wallpaper_adv')
    // let bothSrc = "https://wallpapercg.com/download/motorola-edge-40--14911.jpg";
    let information_wallpaer_dynamic_detail_wallpaper = document.querySelector(".information_wallpaer-dynamic_detail_wallpaper")
    option2.addEventListener('click',()=>{
        localStorage.setItem("lockSrc", mysrc);
        // homescreen_wallpaper_img.src = mysrc;
        wallpaer_dynamic_detail_wallpaper_adv.classList.add("none")
        successMsg.classList.remove('none')
        setwallpaper_window.classList.add('none')
        successMsg.classList.add('pop-animation')
        
        changeHomescreen.src = mysrc
        
        setTimeout(()=>{
            
            successMsg.classList.add('none')
        },2000)
        
        
        
        checker = 1;
    })
    
    
    const change_password_detail_setPassword_i = document.querySelector('.change_password_detail_setPassword i')
    // const change_password_detail_setPassword = document.querySelector('.change_password_detail_setPassword')
    change_password_detail_setPassword_i.addEventListener('click',()=>{
        
        change_password_detail_setPassword.classList.remove('none')
        change_password_detail_setPassword.classList.add('slideleft')
        change_password_detail_setPassword.classList.remove('slideRight')
        change_password_detail_setPassword.style.marginLeft = '-125px'
        change_password_detail_setPassword.style.marginTop = '-275px'
        setPassword.value=""
    })




    
    //for search functionality 😎
    const search2 = document.querySelector('.search2')
    const search2_i = document.querySelector('.search2 i')
    searchI.addEventListener('click',()=>{
    setTimeout(() => {
        
        search2.style.marginTop ="-80px"
    }, 20);

    
})
    const search2_value = document.querySelector('.search2 input')
    const styled_input = document.querySelector('.styled-input')
    const search_box = document.querySelector('.search');
    const search_detail = document.querySelector('.search_detail');
    const search_detail_ul = document.querySelector('.search_detail ul');
    search_box.addEventListener('click', ()=> {
        search_detail.classList.remove('none')
        search_detail.classList.remove('slideleft')
        search_detail.style.marginLeft = '0px'
        search_detail.style.marginTop = '0px'
        setTimeout(() => {
            
            search2.style.marginTop ="-80px"
        }, 20);
        setting_window_adv_feauture.classList.add('none')
    })
    
    search.addEventListener('click',()=>{
        back_btn.classList.add('none')

    })
    
    
    const suggestions = [
        {
            text:'Display',
            id:'Display1'
        },
        {
            text:'Brightness level',
            id:'Brightnesslevel2'
        },
        {
            text:'Dark theme',
            id:'Darktheme3'
        },
        {
            text:'Colours',
            id:'Colours4'
        },
        {
            text:'Wallpaper',
            id:'Wallpaper5'
        },
        {
            text:'Dynamic',
            id:'Dynamic6'
        },
        {
            text:'Battery',
            id:'Battery7'
        },
        {
            text:'Password',
            id:'Password8'
        },
        {
            text:'Change password',
            id:'Changepassword9'
        },
        {
            text:'Special',
            id:'Special10'
        },
        {
            text:'Update',
            id:'Update11'
        },
        {
            text:'About',
            id:'About12'
        }
    ]
   
    search2_value.addEventListener('input',()=>handelSearch())
    const handelSearch = () => {
        if(search2_value.value === ''){
            document.querySelector('.lists').classList.add('none')
        }
        const lis = document.querySelectorAll('.search_detail ul li')
        lis.forEach((item)=>{
            search_detail_ul.removeChild(item)
        })
        const results = []
        if(search2_value.value !== ''){
            suggestions.forEach((item)=>{
                if(item.text.toUpperCase().includes(search2_value.value.toUpperCase())){
                    results.push(item.text);
                }
            })
       } 
       
       if( search2_value.value !== '' && results.length == 0){
            document.querySelector('.lists').classList.remove('none')
        }
        else{

           document.querySelector('.lists').classList.add('none')
           results.forEach((item)=>{
               let li = document.createElement('li')
               li.textContent = item
               li.style.fontSize = '.9rem'
               if(item === 'Brightness level'){
            li.style.fontWeight = '300'
            }
            if(item === 'Dark theme'){
            li.style.fontWeight = '300'
            }
            if(item === 'Colours'){
                li.style.fontWeight = '300'
            }
            if(item === 'Dynamic'){
                li.style.fontWeight = '300'
            }
            if(item === 'Change password'){
                li.style.fontWeight = '300'
            }
            search_detail_ul.appendChild(li)


          })
       }
        handelClick()
    }

    const handelClick = () => {
        const lis = document.querySelectorAll('.search_detail ul li')
        lis.forEach((item)=>{
            item.addEventListener('click',(e)=>{
                displayScreen(e.target.textContent)
            })
        })
    }

    let intervel = ''
    let intervel2 = ''
    let child = ''

    const displayScreen = (value) => {
        let id_Of_That = '' 
        suggestions.forEach((item)=>{
            if(value == item.text){
                id_Of_That = item.id;
            }
        })
        if(id_Of_That === 'Brightnesslevel2' || id_Of_That === 'Darktheme3' || id_Of_That === 'Changepassword9' || id_Of_That === 'Colours4' || id_Of_That === 'Dynamic6'){
            if(id_Of_That === 'Darktheme3'){
                const child = document.querySelector(`#${id_Of_That}`);
                intervel = setInterval(() => {
                    child.style.color = '#38c3f5'
                }, 400);
                intervel2 = setInterval(() => {
                    if(check2 == 0){

                        child.style.color = 'white'
                    }
                    else{
                        child.style.color = 'black'
                        
                    }
                }, 800);
                
                setTimeout(() => {
                    child.style.color = ''
                    
                    clearInterval(intervel)
                    clearInterval(intervel2)
                }, 2500);

                const parent = document.querySelector(`#Display1`);
                parent.classList.remove('none')
                parent.classList.remove('slideleft')
                
                const back_btn = document.querySelector(`#Display1_back_btn`)
                back_btn.addEventListener('click',()=>{
                    parent.classList.add('slideleft')
                })
            }

            if(id_Of_That === 'Brightnesslevel2'){
                child = document.querySelector(`#${id_Of_That}`);
                let intervel = setInterval(() => {
                    child.style.color = '#38c3f5'
                }, 400);
                let intervel2 = setInterval(() => {
                    if(check2 == 0){

                        child.style.color = 'white'
                    }
                    else{
                        child.style.color = 'black'
                        
                    }
                }, 800);
                
                setTimeout(() => {
                    child.style.color = ''
                    
                    clearInterval(intervel)
                    clearInterval(intervel2)
                }, 2500);
                const parent = document.querySelector(`#Display1`);
                parent.classList.remove('none')
                parent.classList.remove('slideleft')
                
                const back_btn = document.querySelector(`#Display1_back_btn`)
                back_btn.addEventListener('click',()=>{
                    parent.classList.add('slideleft')
                })
            }

            if(id_Of_That === 'Changepassword9'){
                const child = document.querySelector(`#${id_Of_That}`);
                let intervel = setInterval(() => {
                    child.style.color = '#38c3f5'
                }, 400);
                let intervel2 = setInterval(() => {
                    if(check2 == 0){

                        child.style.color = 'white'
                    }
                    else{
                        child.style.color = 'black'
                        
                    }
                }, 800);
                
                setTimeout(() => {
                    child.style.color = ''

                    clearInterval(intervel)
                    clearInterval(intervel2)
                }, 2500);
                const parent = document.querySelector(`#Password8`);
                parent.classList.remove("none");
                parent.classList.add("slideRight");
                parent.classList.remove("slideleft");
                
                const back_btn = document.querySelector(`#Password8_back_btn`)
                back_btn.addEventListener('click',()=>{
                    parent.classList.add('slideleft')
                })

            }

            if(id_Of_That === 'Colours4'){
                const child = document.querySelector(`#${id_Of_That}`);
                let intervel = setInterval(() => {
                    child.style.color = '#38c3f5'
                }, 400);
                let intervel2 = setInterval(() => {
                    if(check2 == 0){

                        child.style.color = 'white'
                    }
                    else{
                        child.style.color = 'black'
                        
                    }
                }, 800);
                
                setTimeout(() => {
                    child.style.color = ''

                    clearInterval(intervel)
                    clearInterval(intervel2)
                }, 2500);
                const parent = document.querySelector(`#Display1`);
                parent.classList.remove("none");
                parent.classList.add("slideRight");
                parent.classList.remove("slideleft");
                
                const back_btn = document.querySelector(`#Display1_back_btn`)
                back_btn.addEventListener('click',()=>{
                    parent.classList.add('slideleft')
                })

            }

            if(id_Of_That === 'Dynamic6'){
                const child = document.querySelector(`#${id_Of_That} p`);
                let intervel = setInterval(() => {
                    child.style.color = '#38c3f5'
                }, 400);
                let intervel2 = setInterval(() => {
                    if(check2 == 0){

                        child.style.color = 'white'
                    }
                    else{
                        child.style.color = 'black'
                        
                    }
                }, 800);
                
                setTimeout(() => {
                    child.style.color = ''

                    clearInterval(intervel)
                    clearInterval(intervel2)
                }, 2500);
                const parent = document.querySelector(`#Wallpaper5`);
                parent.classList.remove("none");
                parent.classList.add("slideRight");
                parent.classList.remove("slideleft");
                
                const back_btn = document.querySelector(`#Wallpaper5_back_btn`)
                back_btn.addEventListener('click',()=>{
                    parent.classList.add('slideleft')
                })

            }
            
        }
        
        else{

            const showThat = document.querySelector(`#${id_Of_That}`);
                showThat.classList.remove("none");
                showThat.classList.add("slideRight");
                showThat.classList.remove("slideleft");
                const back_btn = document.querySelector(`#${id_Of_That}_back_btn`)
                back_btn.addEventListener('click',()=>{
                    showThat.classList.add('slideleft')
                })
                
            }
        }
        const search_detail_i = document.querySelector('.search_detail i')
        search_detail_i.addEventListener('click',()=>{
            search_detail.classList.add('slideleft')
            search_detail.classList.remove('slideRight')
            search_detail.style.marginLeft = '-125px'
            search_detail.style.marginTop = '-275px'
            search2.style.marginTop ="0px"
            
            const lis = document.querySelectorAll('.search_detail ul li')
            lis.forEach((item)=>{
                search_detail_ul.removeChild(item)
            })
            search2_value.value =''
            
            setting_window_adv_feauture.classList.remove('none')
            back_btn.classList.remove('none')

        })

    //for password
    
    change_password_detail_back_i.addEventListener('click', () => {
        change_password_detail.classList.remove('slideRight')
        change_password_detail.classList.add('slideleft')
    })


    
    const password_detail_change = document.querySelector('.password-detail-change')
    const password_detail_change_p = document.querySelector('.password-detail-change p')
    const setPassword = document.querySelector('.setPassword input')
    const continuee = document.querySelector('.continue')
    
    const change_password_detail_setPassword = document.querySelector('.change_password_detail_setPassword');
    const change_password_detail_setPassword_input = document.querySelector('.change_password_detail_setPassword input');
    const change_password_detail_setPassword_button = document.querySelector('.change_password_detail_setPassword button');
    const change_password_detail_setPassword_p = document.querySelector('.change_password_detail_setPassword p')
    
    change_password_detail_setPassword_input.addEventListener('keydown',()=>{
        change_password_detail_setPassword_p.classList.add('none')
    })
    password_detail_change_p.addEventListener('click',()=>{
        setPassword.value = ""
    })
    password_detail_change.addEventListener('click', () => {
        change_password_detail.classList.remove('none')
        change_password_detail.classList.remove('slideleft')
        change_password_detail.classList.add('slideRight')
        change_password_detail.style.marginLeft = '-125px'
        change_password_detail.style.marginTop = '-275px'
        continuee.addEventListener('click',() => {
            let password = localStorage.getItem('password')
        console.log(password);
        
        if(password){
            
            if(setPassword.value === password) 
                {
                    
                    change_password_detail_setPassword.classList.remove('none')
                    change_password_detail_setPassword.classList.remove('slideleft')
                    change_password_detail_setPassword.classList.add('slideRight')
                    change_password_detail_setPassword.style.marginLeft = '-125px'
                    change_password_detail_setPassword.style.marginTop = '-275px'
                   
                    // setTimeout(()=>2000)
                    setTimeout(() => {
                        
                        change_password_detail_setPassword.classList.remove('none')
                        change_password_detail_setPassword.classList.add('slideRight')
                    }, 200);
                    
                }
        }
            
        else if(!password && setPassword.value === '1234'){
            change_password_detail_setPassword.classList.remove('none')
            change_password_detail_setPassword.classList.remove('slideleft')
            change_password_detail_setPassword.classList.add('slideRight')
            change_password_detail_setPassword.style.marginLeft = '-125px'
            change_password_detail_setPassword.style.marginTop = '-275px'
           
                // setTimeout(()=>2000)
            setTimeout(() => {
                
                change_password_detail_setPassword.classList.remove('none')
                change_password_detail_setPassword.classList.add('slideRight')
            }, 200); 
        }
        else{
            console.log('sale shi password daal')
        }
        
        })
    })

    change_password_detail_setPassword_button.addEventListener('click', () => {
        
        if(change_password_detail_setPassword_input.value.length >= 4){
            localStorage.setItem('password', change_password_detail_setPassword_input.value)
            change_password_detail_setPassword.classList.add('none')
            change_password_detail.classList.add('none')
            Password_detail.classList.add('none')
        }
        else{
            change_password_detail_setPassword_p.classList.remove('none') 
        } 
        
    })
    
    
    
    //local storage
    
    function setHomeScreenWallpaper(){
        homescreen_wallpaper_img.src = localStorage.getItem("homeSrc");
        changeHomescreen.src = localStorage.getItem("homeSrc");
        
        
    }
    function setLockScreenWallpaper(){
        lockscreen_wallpaper_img.src = localStorage.getItem("lockSrc");
        changeLockscreen.src = localStorage.getItem("lockSrc");
        
        
    }
    
    window.addEventListener('load',()=>{
        
        
        setLockScreenWallpaper();
        
        
        setHomeScreenWallpaper();
        
    })
    
    window.addEventListener("load", () => {
        let checkmade = localStorage.getItem("checkForDrakTheme");
        if (checkmade === "true") {
            
            lockscreen_passwordscreen.style.backgroundColor = "#111"
            lockscreen_passwordscreen.style.color = "white"
            lockscreen_passwordscreen_password.style.backgroundColor = "#111"
            lockscreen_passwordscreen_password.style.borderBottom = "2px solid white"
            
            circle.style.marginLeft = '15px';
            check2 = 0;
            let Display_detail = document.querySelector('.Display-detail');
            Display_detail.style.backgroundColor = "#111"
            Display_detail.style.color = "white";
            Display_detail_back.style.color = "white"
            toogle.style.backgroundColor = "#38c3f5"
            
            setting_window_adv.style.backgroundColor = "#111"
            setting_window_adv.style.color = "white"
            setting_window_adv_feauture.style.backgroundColor = '#222'
            setting_window_adv_feauture.style.color = 'white'
            allIcons.forEach((it)=>{
                it.style.color = "white"
            })
            search.style.backgroundColor = "#222"
            searchI.style.color = "white"
            back_btn.style.color = "white"
            setting_window.style.backgroundColor = "#111"
            
            Wallpaper_detail.style.backgroundColor = "#111"
            Wallpaper_detail.style.color = "white";
            Wallpaper_detail_back.style.color = "white"  
            wallpaer_box.style.backgroundColor = '#222';
            wallpaer_dynamic.style.backgroundColor = '#222';
            wallpaer_dynamic_detail.style.backgroundColor = '#111';
            wallpaer_dynamic_detail.style.color = 'white';
            wallpaer_dynamic_detail_i.style.color = 'white'
            wallpaer_dynamic_detail_wallpaper_adv_i.style.color = 'white'
            setwallpaper_window.style.backgroundColor = "#222"
            setwallpaper_window.style.color = "white"
            twoOptions_i.forEach((item)=> item.style.color = "white")
            successMsg_btn.style.backgroundColor = "#222"
            successMsg_btn.style.color = "white"
            
            Battery_detail.style.backgroundColor = "#111"
            Battery_detail.style.color = "white";
            Battery_detail_back.style.color = "white"  
            
            Password_detail.style.backgroundColor = "#111"
            Password_detail.style.color = "white";
            Password_detail_back.style.color = "white"
            change_password_detail.style.backgroundColor = '#111'
            change_password_detail_back_i.style.color = "white"
            change_password_detail_lock_i.style.color = "white"
            change_password_detail_setPassword.style.backgroundColor = "#111"
            change_password_detail_setPassword_i.style.color = "white"
            change_password_detail_setPassword_input.style.borderBottom = "2px solid white"
            
            Special_detail.style.backgroundColor = "#111"
            Special_detail.style.color = "white";
            Special_detail_back.style.color = "white"  
            
            Update_detail.style.backgroundColor = "#111"
            Update_detail.style.color = "white";
            Update_detail_back.style.color = "white"  
            
            About_detail.style.backgroundColor = "#111"
            About_detail.style.color = "white";
            About_detail_back.style.color = "white"
        } else {
            
            lockscreen_passwordscreen.style.backgroundColor = "#ece6ed"
            lockscreen_passwordscreen.style.color = "black"
            
            circle.style.marginLeft = '0px';
            check2 = 1;
            let Display_detail = document.querySelector('.Display-detail');
            Display_detail.style.backgroundColor = "#ece6ed"
            Display_detail.style.color = "black"
            Display_detail_back.style.color = "black"
            toogle.style.backgroundColor = "grey"
            
            setting_window_adv.style.backgroundColor = "#ece6ed"
        setting_window_adv.style.color = "black"
        setting_window_adv_feauture.style.backgroundColor = 'white'
        setting_window_adv_feauture.style.color = 'black'
        allIcons.forEach((it)=>{
            it.style.color = "black"
        })
        searchI.style.color = "black"
        back_btn.style.color = "black"
        setting_window.style.backgroundColor = "#ece6ed"
        
        
        Wallpaper_detail.style.backgroundColor = "#ece6ed"
        Wallpaper_detail.style.color = "black";
        Wallpaper_detail_back.style.color = "black" 
        wallpaer_box.style.backgroundColor = 'white';
        wallpaer_dynamic.style.backgroundColor = 'white';  
        wallpaer_dynamic_detail.style.backgroundColor = '#ece6ed';
        wallpaer_dynamic_detail.style.color = 'black';   
        wallpaer_dynamic_detail_i.style.color = 'black'
        wallpaer_dynamic_detail_wallpaper_adv_i.style.color = 'black'
        setwallpaper_window.style.backgroundColor = "#ece6ed"
        setwallpaper_window.style.color = "black"
        twoOptions_i.forEach((item)=> item.style.color = "black")
        successMsg_btn.style.backgroundColor = "white"
        successMsg_btn.style.color = "black"
        
        Battery_detail.style.backgroundColor = "#ece6ed"
        Battery_detail.style.color = "black";
        Battery_detail_back.style.color = "black"  
        
        Password_detail.style.backgroundColor = "#ece6ed"
        Password_detail.style.color = "black";
        Password_detail_back.style.color = "black"  
        change_password_detail.style.backgroundColor = '#ece6ed'
        change_password_detail_back_i.style.color = "black"
        change_password_detail_setPassword.style.backgroundColor = "#ece6ed"
        change_password_detail_setPassword_i.style.color = "black"
        change_password_detail_setPassword_input.style.borderBottom = "2px solid black"
        
        Special_detail.style.backgroundColor = "#ece6ed"
        Special_detail.style.color = "black";
        Special_detail_back.style.color = "black"  
        
        Update_detail.style.backgroundColor = "#ece6ed"
        Update_detail.style.color = "black";
        Update_detail_back.style.color = "black"
        
        About_detail.style.backgroundColor = "#ece6ed"
        About_detail.style.color = "black";
        About_detail_back.style.color = "black"
    }
    
});


console.log(".........................................");
