<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <table>
                    <caption>
                        <div id="cal">
                            <div id="top">公元&nbsp;
                                <select>
                                </select>
                                &nbsp;年&nbsp;
                                <select>
                                </select>
                                &nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;农历<span></span>年&nbsp;[&nbsp;<span></span>年&nbsp;]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="button" value="回到今天" title="点击后跳转回今天" style="padding:0px">
                            </div>
                        </div>
                    </caption>
                    <thead>
                    <tr id="wk">
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th style="color:#ff4a00">六</th>
                        <th style="color:#ff4a00">日</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td width="14.28%" v-html="tbody.tr0.td0.html" @click="aaaF(tbody.tr0.td0.data,tbody.tr0.td0.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td1.html" @click="aaaF(tbody.tr0.td1.data,tbody.tr0.td1.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td2.html" @click="aaaF(tbody.tr0.td2.data,tbody.tr0.td2.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td3.html" @click="aaaF(tbody.tr0.td3.data,tbody.tr0.td3.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td4.html" @click="aaaF(tbody.tr0.td4.data,tbody.tr0.td4.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td5.html" @click="aaaF(tbody.tr0.td5.data,tbody.tr0.td5.records)"></td>
                        <td width="14.28%" v-html="tbody.tr0.td6.html" @click="aaaF(tbody.tr0.td6.data,tbody.tr0.td6.records)"></td>
                    </tr>
                    <tr>
                        <td v-html="tbody.tr1.td0.html" @click="aaaF(tbody.tr1.td0.data,tbody.tr1.td0.records)"></td>
                        <td v-html="tbody.tr1.td1.html" @click="aaaF(tbody.tr1.td1.data,tbody.tr1.td1.records)"></td>
                        <td v-html="tbody.tr1.td2.html" @click="aaaF(tbody.tr1.td2.data,tbody.tr1.td2.records)"></td>
                        <td v-html="tbody.tr1.td3.html" @click="aaaF(tbody.tr1.td3.data,tbody.tr1.td3.records)"></td>
                        <td v-html="tbody.tr1.td4.html" @click="aaaF(tbody.tr1.td4.data,tbody.tr1.td4.records)"></td>
                        <td v-html="tbody.tr1.td5.html" @click="aaaF(tbody.tr1.td5.data,tbody.tr1.td5.records)"></td>
                        <td v-html="tbody.tr1.td6.html" @click="aaaF(tbody.tr1.td6.data,tbody.tr1.td6.records)"></td>
                    </tr>
                    <tr>
                        <td v-html="tbody.tr2.td0.html" @click="aaaF(tbody.tr2.td0.data,tbody.tr2.td0.records)"></td>
                        <td v-html="tbody.tr2.td1.html" @click="aaaF(tbody.tr2.td1.data,tbody.tr2.td1.records)"></td>
                        <td v-html="tbody.tr2.td2.html" @click="aaaF(tbody.tr2.td2.data,tbody.tr2.td2.records)"></td>
                        <td v-html="tbody.tr2.td3.html" @click="aaaF(tbody.tr2.td3.data,tbody.tr2.td3.records)"></td>
                        <td v-html="tbody.tr2.td4.html" @click="aaaF(tbody.tr2.td4.data,tbody.tr2.td4.records)"></td>
                        <td v-html="tbody.tr2.td5.html" @click="aaaF(tbody.tr2.td5.data,tbody.tr2.td5.records)"></td>
                        <td v-html="tbody.tr2.td6.html" @click="aaaF(tbody.tr2.td6.data,tbody.tr2.td6.records)"></td>
                    </tr>
                    <tr>
                        <td v-html="tbody.tr3.td0.html" @click="aaaF(tbody.tr3.td0.data,tbody.tr3.td0.records)"></td>
                        <td v-html="tbody.tr3.td1.html" @click="aaaF(tbody.tr3.td1.data,tbody.tr3.td1.records)"></td>
                        <td v-html="tbody.tr3.td2.html" @click="aaaF(tbody.tr3.td2.data,tbody.tr3.td2.records)"></td>
                        <td v-html="tbody.tr3.td3.html" @click="aaaF(tbody.tr3.td3.data,tbody.tr3.td3.records)"></td>
                        <td v-html="tbody.tr3.td4.html" @click="aaaF(tbody.tr3.td4.data,tbody.tr3.td4.records)"></td>
                        <td v-html="tbody.tr3.td5.html" @click="aaaF(tbody.tr3.td5.data,tbody.tr3.td5.records)"></td>
                        <td v-html="tbody.tr3.td6.html" @click="aaaF(tbody.tr3.td6.data,tbody.tr3.td6.records)"></td>
                    </tr>
                    <tr>
                        <td v-html="tbody.tr4.td0.html" @click="aaaF(tbody.tr4.td0.data,tbody.tr4.td0.records)"></td>
                        <td v-html="tbody.tr4.td1.html" @click="aaaF(tbody.tr4.td1.data,tbody.tr4.td1.records)"></td>
                        <td v-html="tbody.tr4.td2.html" @click="aaaF(tbody.tr4.td2.data,tbody.tr4.td2.records)"></td>
                        <td v-html="tbody.tr4.td3.html" @click="aaaF(tbody.tr4.td3.data,tbody.tr4.td3.records)"></td>
                        <td v-html="tbody.tr4.td4.html" @click="aaaF(tbody.tr4.td4.data,tbody.tr4.td4.records)"></td>
                        <td v-html="tbody.tr4.td5.html" @click="aaaF(tbody.tr4.td5.data,tbody.tr4.td5.records)"></td>
                        <td v-html="tbody.tr4.td6.html" @click="aaaF(tbody.tr4.td6.data,tbody.tr4.td6.records)"></td>
                    </tr>
                    <tr>
                        <td v-html="tbody.tr5.td0.html" @click="aaaF(tbody.tr5.td0.data,tbody.tr5.td0.records)"></td>
                        <td v-html="tbody.tr5.td1.html" @click="aaaF(tbody.tr5.td1.data,tbody.tr5.td1.records)"></td>
                        <td v-html="tbody.tr5.td2.html" @click="aaaF(tbody.tr5.td2.data,tbody.tr5.td2.records)"></td>
                        <td v-html="tbody.tr5.td3.html" @click="aaaF(tbody.tr5.td3.data,tbody.tr5.td3.records)"></td>
                        <td v-html="tbody.tr5.td4.html" @click="aaaF(tbody.tr5.td4.data,tbody.tr5.td4.records)"></td>
                        <td v-html="tbody.tr5.td5.html" @click="aaaF(tbody.tr5.td5.data,tbody.tr5.td5.records)"></td>
                        <td v-html="tbody.tr5.td6.html" @click="aaaF(tbody.tr5.td6.data,tbody.tr5.td6.records)"></td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="7" v-html="tfoot.tr0.td0.html" style="color:#fafafa;background:#666;"></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
    import Top1 from '@/components/Top'
    import Bottom from '@/components/Bottom'

    export default {
        name: 'home',
        components: {
            Top1,
            Bottom,
        },
        data(){
            return {
                tbody:{
                    tr0:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                    tr1:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                    tr2:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                    tr3:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                    tr4:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                    tr5:{
                        td0:{html:'',data:'',records:''},
                        td1:{html:'',data:'',records:''},
                        td2:{html:'',data:'',records:''},
                        td3:{html:'',data:'',records:''},
                        td4:{html:'',data:'',records:''},
                        td5:{html:'',data:'',records:''},
                        td6:{html:'',data:'',records:''},
                    },
                },
                tfoot:{
                    tr0:{
                        td0:{html:''}
                    }
                }
            }
        },
        methods:{
            aaaF(data,records)
            {
                let html = '';
                html += '<div style="margin:0 0 5px;font-size:16px;font-weight:600;color:#eee;background:#888;">'+records+'</div>';
                html += data.solarYear+'&nbsp;年&nbsp;'+data.solarMonth+'&nbsp;月&nbsp;'+data.solarDate+'&nbsp;日&nbsp;'+data.solarWeekDayInChinese+'';
                html += '<br><b>农历&nbsp;'+data.lunarMonthInChinese+'月'+data.lunarDateInChinese+'</b>';
                html += '<br>'+data.ganzhiYear+'年&nbsp;'+data.ganzhiMonth+'月&nbsp;'+data.ganzhiDate+'日';
                if (data.solarFestival != "" || data.lunarFestival != "" || data.jieqi != "") {
                    html += '<br><b>'+data.lunarFestival+data.solarFestival+data.jieqi+'</b>';
                }
                this.tfoot.tr0.td0.html=html;
            }
        },
        mounted(){
            let this_ = this;
            (function() {
                var S = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
                function M(C) {
                    return document.getElementById(C)
                }
                function R(C) {
                    return document.createElement(C)
                }
                var P = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448];
                var K = "甲乙丙丁戊己庚辛壬癸";
                var J = "子丑寅卯辰巳午未申酉戌亥";
                var O = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
                var L = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
                var D = [0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
                var B = "日一二三四五六七八九十";
                var H = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊"];
                var E = "初十廿卅";
                var V = {
                    "0101": "*1元旦节",
                    "0214": "情人节",
                    "0305": "学雷锋纪念日",
                    "0308": "妇女节",
                    "0312": "植树节",
                    "0315": "消费者权益日",
                    "0401": "愚人节",
                    "0501": "*1劳动节",
                    "0504": "青年节",
                    "0601": "国际儿童节",
                    "0701": "中国共产党诞辰",
                    "0801": "建军节",
                    "0910": "中国教师节",
                    "1001": "*3国庆节",
                    "1224": "平安夜",
                    "1225": "圣诞节"
                };
                var T = {
                    "0101": "*2春节",
                    "0115": "元宵节",
                    "0505": "*1端午节",
                    "0815": "*1中秋节",
                    "0909": "重阳节",
                    "1208": "腊八节",
                    "0100": "除夕"
                };
                function U(Y) {
                    function c(j, i) {
                        var h = new Date((31556925974.7 * (j - 1900) + D[i] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
                        return (h.getUTCDate())
                    }
                    function d(k) {
                        var h, j = 348;
                        for (h = 32768; h > 8; h >>= 1) {
                            j += (P[k - 1900] & h) ? 1 : 0
                        }
                        return (j + b(k))
                    }
                    function a(h) {
                        return (K.charAt(h % 10) + J.charAt(h % 12))
                    }
                    function b(h) {
                        if (g(h)) {
                            return ((P[h - 1900] & 65536) ? 30 : 29)
                        } else {
                            return (0)
                        }
                    }
                    function g(h) {
                        return (P[h - 1900] & 15)
                    }
                    function e(i, h) {
                        return ((P[i - 1900] & (65536 >> h)) ? 30 : 29)
                    }
                    function C(m) {
                        var k, j = 0,
                            h = 0;
                        var l = new Date(1900, 0, 31);
                        var n = (m - l) / 86400000;
                        this.dayCyl = n + 40;
                        this.monCyl = 14;
                        for (k = 1900; k < 2050 && n > 0; k++) {
                            h = d(k);
                            n -= h;
                            this.monCyl += 12
                        }
                        if (n < 0) {
                            n += h;
                            k--;
                            this.monCyl -= 12
                        }
                        this.year = k;
                        this.yearCyl = k - 1864;
                        j = g(k);
                        this.isLeap = false;
                        for (k = 1; k < 13 && n > 0; k++) {
                            if (j > 0 && k == (j + 1) && this.isLeap == false) {
                                --k;
                                this.isLeap = true;
                                h = b(this.year)
                            } else {
                                h = e(this.year, k)
                            }
                            if (this.isLeap == true && k == (j + 1)) {
                                this.isLeap = false
                            }
                            n -= h;
                            if (this.isLeap == false) {
                                this.monCyl++
                            }
                        }
                        if (n == 0 && j > 0 && k == j + 1) {
                            if (this.isLeap) {
                                this.isLeap = false
                            } else {
                                this.isLeap = true; --k; --this.monCyl
                            }
                        }
                        if (n < 0) {
                            n += h; --k; --this.monCyl
                        }
                        this.month = k;
                        this.day = n + 1
                    }
                    function G(h) {
                        return h < 10 ? "0" + h: h
                    }
                    function f(i, j) {
                        var h = i;
                        return j.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g,
                            function(k) {
                                switch (k) {
                                    case "yyyy":
                                        var l = "000" + h.getFullYear();
                                        return l.substring(l.length - 4);
                                    case "dd":
                                        return G(h.getDate());
                                    case "d":
                                        return h.getDate().toString();
                                    case "MM":
                                        return G((h.getMonth() + 1));
                                    case "M":
                                        return h.getMonth() + 1
                                }
                            })
                    }
                    function Z(i, h) {
                        var j;
                        switch (i, h) {
                            case 10:
                                j = "初十";
                                break;
                            case 20:
                                j = "二十";
                                break;
                            case 30:
                                j = "三十";
                                break;
                            default:
                                j = E.charAt(Math.floor(h / 10));
                                j += B.charAt(h % 10)
                        }
                        return (j)
                    }
                    this.date = Y;
                    this.isToday = false;
                    this.isRestDay = false;
                    this.solarYear = f(Y, "yyyy");
                    this.solarMonth = f(Y, "M");
                    this.solarDate = f(Y, "d");
                    this.solarWeekDay = Y.getDay();
                    this.solarWeekDayInChinese = "星期" + B.charAt(this.solarWeekDay);
                    var X = new C(Y);
                    this.lunarYear = X.year;
                    this.shengxiao = O.charAt((this.lunarYear - 4) % 12);
                    this.lunarMonth = X.month;
                    this.lunarIsLeapMonth = X.isLeap;
                    this.lunarMonthInChinese = this.lunarIsLeapMonth ? "闰" + H[X.month - 1] : H[X.month - 1];
                    this.lunarDate = X.day;
                    this.showInLunar = this.lunarDateInChinese = Z(this.lunarMonth, this.lunarDate);
                    if (this.lunarDate == 1) {
                        this.showInLunar = this.lunarMonthInChinese + "月"
                    }
                    this.ganzhiYear = a(X.yearCyl);
                    this.ganzhiMonth = a(X.monCyl);
                    this.ganzhiDate = a(X.dayCyl++);
                    this.jieqi = "";
                    this.restDays = 0;
                    if (c(this.solarYear, (this.solarMonth - 1) * 2) == f(Y, "d")) {
                        this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2]
                    }
                    if (c(this.solarYear, (this.solarMonth - 1) * 2 + 1) == f(Y, "d")) {
                        this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2 + 1]
                    }
                    if (this.showInLunar == "清明") {
                        this.showInLunar = "清明节";
                        this.restDays = 1
                    }
                    this.solarFestival = V[f(Y, "MM") + f(Y, "dd")];
                    if (typeof this.solarFestival == "undefined") {
                        this.solarFestival = ""
                    } else {
                        if (/\*(\d)/.test(this.solarFestival)) {
                            this.restDays = parseInt(RegExp.$1);
                            this.solarFestival = this.solarFestival.replace(/\*\d/, "")
                        }
                    }
                    this.showInLunar = (this.solarFestival == "") ? this.showInLunar: this.solarFestival;
                    this.lunarFestival = T[this.lunarIsLeapMonth ? "00": G(this.lunarMonth) + G(this.lunarDate)];
                    if (typeof this.lunarFestival == "undefined") {
                        this.lunarFestival = ""
                    } else {
                        if (/\*(\d)/.test(this.lunarFestival)) {
                            this.restDays = (this.restDays > parseInt(RegExp.$1)) ? this.restDays: parseInt(RegExp.$1);
                            this.lunarFestival = this.lunarFestival.replace(/\*\d/, "")
                        }
                    }
                    if (this.lunarMonth == 12 && this.lunarDate == e(this.lunarYear, 12)) {
                        this.lunarFestival = T["0100"];
                        this.restDays = 1
                    }
                    this.showInLunar = (this.lunarFestival == "") ? this.showInLunar: this.lunarFestival;
                    this.showInLunar = (this.showInLunar.length > 4) ? this.showInLunar.substr(0, 2) + "...": this.showInLunar
                }
                var Q = (function() {
                    var X = {};
                    X.lines = 0;
                    X.dateArray = new Array(42);
                    function Y(a) {
                        return (((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0))
                    }
                    function G(a, b) {
                        return [31, (Y(a) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
                    }
                    function C(a, b) {
                        a.setDate(a.getDate() + b);
                        return a
                    }
                    function Z(a) {
                        var f = 0;
                        var c = new U(new Date(a.solarYear, a.solarMonth - 1, 1));
                        var d = (c.solarWeekDay - 1 == -1) ? 6 : c.solarWeekDay - 1;
                        X.lines = Math.ceil((d + G(a.solarYear, a.solarMonth - 1)) / 7);
                        for (var e = 0; e < X.dateArray.length; e++) {
                            if (c.restDays != 0) {
                                f = c.restDays
                            }
                            if (f > 0) {
                                c.isRest = true
                            }
                            if (d-->0 || c.solarMonth != a.solarMonth) {
                                X.dateArray[e] = null;
                                continue
                            }
                            var b = new U(new Date());
                            if (c.solarYear == b.solarYear && c.solarMonth == b.solarMonth && c.solarDate == b.solarDate) {
                                c.isToday = true
                            }
                            X.dateArray[e] = c;
                            c = new U(C(c.date, 1));
                            f--
                        }
                    }
                    return {
                        init: function(a) {
                            Z(a)
                        },
                        getJson: function() {
                            return X
                        }
                    }
                })();
                var W = (function() {
                    var C = M("top").getElementsByTagName("SELECT")[0];
                    var X = M("top").getElementsByTagName("SELECT")[1];
                    var G = M("top").getElementsByTagName("SPAN")[0];
                    var c = M("top").getElementsByTagName("SPAN")[1];
                    var Y = M("top").getElementsByTagName("INPUT")[0];
                    function a(g) {
                        G.innerHTML = g.ganzhiYear;
                        c.innerHTML = g.shengxiao
                    }
                    function b(g) {
                        C[g.solarYear - 1901].selected = true;
                        X[g.solarMonth - 1].selected = true;
                    }
                    function f() {
                        var j = C.value;
                        var g = X.value;
                        var i = new U(new Date(j, g - 1, 1));
                        Q.init(i);
                        N.draw();
                        if (this == C) {
                            i = new U(new Date(j, 3, 1));
                            G.innerHTML = i.ganzhiYear;
                            c.innerHTML = i.shengxiao
                        }
                        var h = new U(new Date());
                        Y.style.visibility = (j == h.solarYear && g == h.solarMonth) ? "hidden": "visible"
                    }
                    function Z() {
                        var g = new U(new Date());
                        a(g);
                        b(g);
                        Q.init(g);
                        N.draw();
                        Y.style.visibility = "hidden"
                    }
                    function d(k, g) {
                        let j = 0;
                        let h = 0;
                        for (j = 1901; j < 2050; j++) {
                            h = R("OPTION");
                            h.value = j;
                            h.innerHTML = j;
                            if (j == k) {
                                h.selected = "selected"
                            }
                            C.appendChild(h)
                        }
                        for (j = 1; j < 13; j++) {
                            h = R("OPTION");
                            h.value = j;
                            h.innerHTML = j;
                            if (j == g) {
                                h.selected = "selected"
                            }
                            X.appendChild(h)
                        }
                        C.onchange = f;
                        X.onchange = f
                    }
                    function e(g) {
                        d(g.solarYear, g.solarMonth);
                        G.innerHTML = g.ganzhiYear;
                        c.innerHTML = g.shengxiao;
                        Y.onclick = Z;
                        Y.style.visibility = "hidden"
                    }
                    return {
                        init: function(g) {
                            e(g)
                        },
                        reset: function(g) {
                            b(g)
                        }
                    }
                })();
                var N = (function() {
                    function C() {
                        let Z = Q.getJson();
                        let cc = Z.dateArray;
                        let i_7=0;
                        let i_7n=-1;
                        this_.tbody={
                            tr0:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                            tr1:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                            tr2:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                            tr3:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                            tr4:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                            tr5:{
                                td0:{html:'',data:'',records:''},
                                td1:{html:'',data:'',records:''},
                                td2:{html:'',data:'',records:''},
                                td3:{html:'',data:'',records:''},
                                td4:{html:'',data:'',records:''},
                                td5:{html:'',data:'',records:''},
                                td6:{html:'',data:'',records:''},
                            },
                        };
                        let vcc_cc1 = '';
                        for (let i = 0; i < cc.length; i++) {
                            if(cc[i]){
                                if(cc[i].solarWeekDay<1){
                                    i_7 = 7;
                                }else{
                                    i_7 = cc[i].solarWeekDay;
                                }
                                vcc_cc1 = cc[i];
                                break ;
                            }
                        }
                        vcc_cc1.solarMonth = vcc_cc1.solarMonth<10?'0'+vcc_cc1.solarMonth:vcc_cc1.solarMonth;
                        vcc_cc1.solarDate = vcc_cc1.solarDate<10?'0'+vcc_cc1.solarDate:vcc_cc1.solarDate;
                        let vcc_time = new Date(vcc_cc1.solarYear+'-'+vcc_cc1.solarMonth+'-'+vcc_cc1.solarDate);
                        let vcc_time_ = vcc_time.getTime()/1000;
                        this_.Data.getShow(vcc_time_).then(function(data){
                            let vcc_records_t = '';
                            let vcc_records_str = '';
                            for(let i=0;i<data.data.length;i++){
                                vcc_records_t = new Date(data.data[i].time*1000);
                                vcc_records_t = vcc_records_t.getDate();
                                vcc_records_str += '部位:'+data.data[i].part+'||健康状况:'+data.data[i].state+'||近日饮食:'+data.data[i].diet+'||处理及就医'+data.data[i].remedy+';';
                            }
                            for (let i = 0; i < cc.length; i++) {
                                let t='';
                                let t2='';
                                let style='width:100%;';
                                i_7++;
                                if(i_7>6){
                                    i_7 = 0;
                                    i_7n++;
                                }
                                if(cc[i]){
                                    //当天
                                    if (cc[i].isToday) {
                                        style+='background:#ddd;';
                                    }
                                    //周末
                                    if (((i % 7) > 4 || cc[i].isRest)){
                                        style+='color:#c60b02;';
                                    }
                                    t = cc[i].solarDate;
                                    t2 = cc[i].showInLunar;
                                    if(i_7n<0){
                                        i_7n=0;
                                    }else if(i_7n>5){
                                        i_7n=5;
                                    }
                                    if(parseInt(t)==vcc_records_t){
                                        style+='background:#ffd8e0;';
                                        this_.tbody['tr'+i_7n]['td'+i_7]['records'] = vcc_records_str;
                                    }
                                    this_.tbody['tr'+i_7n]['td'+i_7]['data'] = cc[i];
                                    this_.tbody['tr'+i_7n]['td'+i_7]['html']+=
                                        '<div style="'+style+'" class="cell">' +
                                        '<div class="so">'+t+'</div>' +
                                        '<div>'+t2+'</div>' +
                                        '</div>';
                                }else{
                                    if(i_7n<0){
                                        i_7n=0;
                                    }else if(i_7n>5){
                                        i_7n=5;
                                    }
                                    this_.tbody['tr'+i_7n]['td'+i_7]['html']+='<div class="cell"></div>';
                                }
                                //console.log(Q.getJson().dateArray[cc[i].dateIndex]);
                            }
                        });
                    }
                    return {
                        draw: function(G) {
                            C(G)
                        }
                    }
                })();
                var A = new U(new Date());
                if (S) {
                    window.attachEvent("onload",
                        function() {
                            W.reset(A)
                        })
                }
                W.init(A);
                Q.init(A);
                N.draw();
            })();
        }
    }
</script>
<style scoped lang="scss">
    .a1{
        caption{
            height:auto;
        }
        th{
            border:none;
            background:#eee;
        }
        td{
            border:none;
        }
        .block{
            width:90%;
            height:80px;
            line-height:80px;
            margin:10px auto;
            text-align:center;
            border-radius:10px;
            color:#fff;
            .left{
                width:10%;
                float:left;
            }
            .centre{
                width:60%;
                float:left;
                font-size:16px;
            }
            .right{
                width:30%;
                float:right;
                .iconfont_ch{
                    font-size:48px;
                }
            }
        }
    }
</style>
<style>
    table{
        width:99%;
        border:0;
        margin:5px auto;
    }
    td{
        padding:0;
        overflow: visible;
    }
    #cal{width:100%;border:1px solid #c3d9ff;font-size:12px;}
    #cal #top{height:29px;line-height:29px;background:#e7eef8;color:#003784;}
    #cal #top select{font-size:12px}
    #cal #top input{padding:0}
    #cal ul#wk li{float:left;width:14.2%;text-align:center;line-height:25px;list-style:none}
    #cal ul#wk li b{font-weight:normal;color:#c60b02}
    #cal #top{padding-top:4px}
    #cal #top input{width:65px}
</style>
