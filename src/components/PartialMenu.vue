<template>
    <div class="menu">
        <nav class="navbar navbar-expand-lg" :class="{show:this.menuopen}">
            <h2 class="text-center mb-1 mt-lg-4 mb-lg-3">めにゅー</h2>
            <div class="menubar" id="menubar">
                <ul class="menu_nav">
                    <li class="menu_item">
                        <router-link to="/" class="menu_link" exact @click.native="menuClose"><i class="fas fa-fw fa-home" aria-hidden="true"></i>ホーム</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/gphoto" class="menu_link" @click.native="menuClose"><i class="far fa-fw fa-images" aria-hidden="true"></i>Googleフォト</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/youtube" class="menu_link" @click.native="menuClose"><i class="fab fa-fw fa-youtube" aria-hidden="true"></i>Youtube</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/twitter" class="menu_link" @click.native="menuClose"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i>Twitter</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/instagram" class="menu_link" @click.native="menuClose"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i>Instagram</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/mastodon" class="menu_link" @click.native="menuClose"><i class="fab fa-fw fa-mastodon" aria-hidden="true"></i>Mastodon</router-link>
                    </li>
                    <li class="menu_item">
                        <router-link to="/coten" class="menu_link" @click.native="menuClose"><i class="fas fa-fw fa-camera" aria-hidden="true"></i>coten</router-link>
                    </li>
                </ul>
                <div class="menubar_imgWrapper">
                    <img src="@/assets/img/menu_back.png" class="menubar_img">
                </div>
            </div>
            <div class="menu_toggle menu_toggleClose border-0" aria-label="ナビゲーションの切替" @click="menuOpenClose">
                <div class="menu_button">
                    <div class="menu_buttonWrapper">
                        <img src="@/assets/img/menu_button2.png" alt="メニュー" class="menu_img">
                        <span class="menu_text">
                            とじる
                        </span>
                    </div>
                </div>
            </div>
        </nav>
        <div class="menu_toggle menu_toggleOpen border-0 my-4" aria-label="ナビゲーションの切替" @click="menuOpenClose">
            <div class="menu_button">
                <div class="menu_buttonWrapper">
                    <img src="@/assets/img/menu_button.png" alt="メニュー" class="menu_img">
                    <span class="menu_text">
                        めにゅー
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PartialMenu',
    data() {
        return {
            menuopen: false
        }
    },
    methods: {
        menuOpenClose() {
            this.menuopen = !this.menuopen
        },
        menuClose() {
            this.menuopen = false
        }
    }
}
</script>


<style scoped lang="scss">
    
</style>