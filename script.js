// ========== 中国世界文化遗产 故事数据 ==========
// 图片URL全部来自您提供的Bing搜索真实图片
const chapters = [
    {
        title: "🏛️ 故宫博物院",
        subtitle: "北京 · 东城区",
        year: "1987年 入选",
        lat: 39.9163,
        lng: 116.3972,
        zoom: 14,
        content: "故宫旧称紫禁城，是明清两代的皇家宫殿，始建于明永乐四年（1406年），历时14年建成。它是世界上现存规模最大、保存最完整的木质结构古建筑群，被誉为世界五大宫之首。故宫共有宫殿9000余间，藏有文物186万余件，是中国古代宫廷建筑和艺术的集大成者。",
        img: "https://preview.qiantucdn.com/58pic/71/08/84/69958PICcgnRGDPQdEs5B_origin_PIC2018.jpg!w1024_new_small_1",
        imgCaption: "故宫博物院"
    },
    {
        title: "⛰️ 长城",
        subtitle: "北京 · 八达岭",
        year: "1987年 入选",
        lat: 40.3573,
        lng: 116.0067,
        zoom: 12,
        content: "长城始建于春秋战国时期，秦统一后连接各国长城形成万里长城。现存长城主要为明代修建，东起山海关，西至嘉峪关，总长超过2.1万公里。长城是世界古代史上最伟大的军事防御工程，见证了中华民族两千多年的历史变迁。",
        img: "https://ts1.tc.mm.bing.net/th/id/R-C.d455f5a958e733a884658376533fbec7?rik=%2fc4Z4Vagaoojhg&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50040%2f1757.jpg_wh300.jpg&ehk=MhIv9niA%2fCLJ6CLYA%2fiskpQ66yfvH7uzMLqoxIbWHow%3d&risl=&pid=ImgRaw&r=0",
        imgCaption: "八达岭长城"
    },
    {
        title: "⚔️ 秦始皇陵及兵马俑",
        subtitle: "陕西 · 西安",
        year: "1987年 入选",
        lat: 34.3849,
        lng: 109.2731,
        zoom: 13,
        content: "秦始皇陵是中国历史上第一位皇帝嬴政的陵墓，历时39年建成。1974年发现的兵马俑坑震惊世界，出土陶俑、陶马约8000件，青铜兵器数万件。兵马俑被誉为世界第八大奇迹，展现了秦朝强大的国力和精湛的工艺水平。",
        img: "https://preview.qiantucdn.com/58pic/71/06/61/50I58PICtsf59eJPtcwfH_origin_PIC2018.jpg!w1024_new_small_1",
        imgCaption: "秦始皇兵马俑"
    },
    {
        title: "🏔️ 泰山",
        subtitle: "山东 · 泰安",
        year: "1987年 入选",
        lat: 36.2528,
        lng: 117.1205,
        zoom: 12,
        content: "泰山被誉为五岳独尊，是古代帝王封禅祭祀的圣地。孔子登泰山而小天下，历代帝王在此举行封禅大典72次。泰山保存有古建筑群20余处、碑碣石刻2200余处，是中国传统文化的精神象征。",
        img: "https://imagepphcloud.thepaper.cn/pph/image/63/535/486.jpg",
        imgCaption: "泰山南天门"
    },
    {
        title: "🏞️ 黄山",
        subtitle: "安徽 · 黄山",
        year: "1990年 入选",
        lat: 30.1405,
        lng: 118.1689,
        zoom: 11,
        content: "黄山以奇松、怪石、云海、温泉四绝闻名天下，被誉为天下第一奇山。明代徐霞客赞叹：薄海内外之名山，无如徽之黄山。黄山拥有古建筑群100余处、摩崖石刻300余处，是中国山水画的灵感源泉。",
        img: "https://img1.qunarzz.com/travel/poi/1501/d5/9130a3ff9895b6.jpg",
        imgCaption: "黄山迎客松"
    },
    {
        title: "🏯 莫高窟",
        subtitle: "甘肃 · 敦煌",
        year: "1987年 入选",
        lat: 40.0371,
        lng: 94.7973,
        zoom: 12,
        content: "莫高窟始建于前秦建元二年（366年），历经十六国至元代千年营造，现存洞窟735个、壁画4.5万平方米、泥质彩塑2415尊。莫高窟是世界上现存规模最大、内容最丰富的佛教艺术宝库，被誉为东方卢浮宫。",
        img: "https://www.cpanet.org.cn/uploads/allimg/160727/9-160HGF146.jpg",
        imgCaption: "莫高窟九层楼"
    },
    {
        title: "🏞️ 九寨沟",
        subtitle: "四川 · 阿坝",
        year: "1992年 入选",
        lat: 33.2635,
        lng: 104.2387,
        zoom: 12,
        content: "九寨沟因沟内有九个藏族村寨而得名，以翠海、叠瀑、彩林、雪峰、藏情五绝闻名。拥有108个高山湖泊、17个瀑布群，被誉为童话世界、人间仙境。九寨沟是世界自然遗产的典范。",
        img: "https://p4.itc.cn/q_70/images01/20211108/9a61edf3f17a43548a5fb369766397fd.jpeg",
        imgCaption: "九寨沟五花海"
    },
    {
        title: "🌿 西湖",
        subtitle: "浙江 · 杭州",
        year: "2011年 入选",
        lat: 30.2403,
        lng: 120.1401,
        zoom: 13,
        content: "西湖三面环山，一面临城，以一山、二塔、三岛、三堤、五湖为格局。白居易、苏轼曾在此疏浚西湖、修筑湖堤。历代文人留下诗词歌赋无数，西湖是中国文人精神家园的象征，也是东方山水美学的典范。",
        img: "https://img1.qunarzz.com/travel/d3/1506/b7/85b46d23fc114a.jpg",
        imgCaption: "杭州西湖"
    }
];

// ========== 全局变量 ==========
let map;
let markers = [];
let currentIndex = 0;
let autoInterval = null;
let isAutoPlaying = false;

// ========== 初始化地图 ==========
function initMap() {
    const first = chapters[0];
    map = L.map('map').setView([first.lat, first.lng], first.zoom);
    
    L.tileLayer('https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        attribution: '&copy; 高德地图',
        maxZoom: 18
    }).addTo(map);
    
    chapters.forEach((ch, idx) => {
        const marker = L.marker([ch.lat, ch.lng]).addTo(map);
        marker.bindPopup(`<b style="color:#ff9800;">${ch.title}</b><br>${ch.subtitle}<br>📅 ${ch.year}`);
        markers.push(marker);
    });
}

function flyToChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    const ch = chapters[index];
    map.flyTo([ch.lat, ch.lng], ch.zoom, { duration: 1.2 });
    setTimeout(() => {
        if (markers[index]) markers[index].openPopup();
    }, 1300);
}

function goToChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    currentIndex = index;
    
    const allChapters = document.querySelectorAll('.story-chapter');
    allChapters.forEach((el, i) => {
        if (i === index) {
            el.classList.add('active');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            el.classList.remove('active');
        }
    });
    
    flyToChapter(index);
    updateProgress();
}

function updateProgress() {
    const percent = ((currentIndex + 1) / chapters.length) * 100;
    const bar = document.getElementById('timeline-bar');
    if (bar) bar.style.width = percent + '%';
    const indicator = document.getElementById('chapter-indicator');
    if (indicator) indicator.textContent = `第${currentIndex + 1}章 / 共${chapters.length}章`;
}

function nextChapter() {
    if (currentIndex + 1 < chapters.length) {
        goToChapter(currentIndex + 1);
    } else if (isAutoPlaying) {
        stopAutoPlay();
        alert('🎉 故事播完了！中国世界文化遗产之旅结束。');
    }
}

function startAutoPlay() {
    if (autoInterval) clearInterval(autoInterval);
    isAutoPlaying = true;
    if (currentIndex === chapters.length - 1) goToChapter(0);
    autoInterval = setInterval(() => {
        if (currentIndex + 1 < chapters.length) nextChapter();
        else { stopAutoPlay(); alert('🎉 播放完成！'); }
    }, 5000);
}

function stopAutoPlay() {
    if (autoInterval) { clearInterval(autoInterval); autoInterval = null; }
    isAutoPlaying = false;
}

function initTimelineClick() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    container.addEventListener('click', (e) => {
        if (isAutoPlaying) stopAutoPlay();
        const rect = container.getBoundingClientRect();
        let percent = (e.clientX - rect.left) / rect.width;
        percent = Math.min(1, Math.max(0, percent));
        const targetIndex = Math.floor(percent * chapters.length);
        if (targetIndex >= 0 && targetIndex < chapters.length) goToChapter(targetIndex);
    });
}

function buildPanel() {
    const panel = document.getElementById('story-panel');
    panel.innerHTML = '';
    
    chapters.forEach((ch, idx) => {
        const div = document.createElement('div');
        div.className = 'story-chapter';
        if (idx === 0) div.classList.add('active');
        
        const yearSpan = document.createElement('div');
        yearSpan.className = 'year';
        yearSpan.textContent = '📅 ' + ch.year;
        div.appendChild(yearSpan);
        
        const titleH2 = document.createElement('h2');
        titleH2.textContent = ch.title;
        div.appendChild(titleH2);
        
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location';
        locationDiv.textContent = '📍 ' + ch.subtitle;
        div.appendChild(locationDiv);
        
        const contentP = document.createElement('p');
        contentP.textContent = ch.content;
        div.appendChild(contentP);
        
        const img = document.createElement('img');
        img.src = ch.img;
        img.alt = ch.title;
        img.className = 'story-img';
        img.loading = 'lazy';
        img.onerror = function() { 
            console.log('图片加载失败，使用备用样式');
            this.style.display = 'none'; 
        };
        div.appendChild(img);
        
        const captionDiv = document.createElement('div');
        captionDiv.className = 'img-caption';
        captionDiv.textContent = ch.imgCaption;
        div.appendChild(captionDiv);
        
        panel.appendChild(div);
    });
}

function initScrollSpy() {
    const panel = document.getElementById('story-panel');
    panel.addEventListener('scroll', () => {
        if (isAutoPlaying) return;
        const chaptersEl = document.querySelectorAll('.story-chapter');
        let active = -1;
        const panelRect = panel.getBoundingClientRect();
        const centerY = panelRect.top + panelRect.height / 2;
        chaptersEl.forEach((ch, i) => {
            const rect = ch.getBoundingClientRect();
            if (rect.top <= centerY && rect.bottom >= centerY) active = i;
        });
        if (active !== -1 && active !== currentIndex) {
            currentIndex = active;
            chaptersEl.forEach((ch, i) => {
                if (i === active) ch.classList.add('active');
                else ch.classList.remove('active');
            });
            flyToChapter(active);
            updateProgress();
        }
    });
}

function initButtons() {
    document.getElementById('playBtn')?.addEventListener('click', () => { stopAutoPlay(); startAutoPlay(); });
    document.getElementById('pauseBtn')?.addEventListener('click', () => { stopAutoPlay(); });
}

window.addEventListener('DOMContentLoaded', () => {
    initMap();
    buildPanel();
    initScrollSpy();
    initButtons();
    initTimelineClick();
    updateProgress();
    console.log('中国世界文化遗产故事地图已启动！');
});