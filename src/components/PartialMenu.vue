<template>
    <div class="navbar_menu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#Navber" aria-controls="Navber" aria-expanded="false" aria-label="ナビゲーションの切替">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="Navbar">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link" exact><i class="fas fa-fw fa-home" aria-hidden="true"></i>ホーム</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/gphoto" class="nav-link"><i class="far fa-fw fa-images" aria-hidden="true"></i>Googleフォト</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/youtube" class="nav-link"><i class="fab fa-fw fa-youtube" aria-hidden="true"></i>Youtube</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/twitter" class="nav-link"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i>Twitter</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/instagram" class="nav-link"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i>Instagram</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/mastodon" class="nav-link"><i class="fab fa-fw fa-mastodon" aria-hidden="true"></i>Mastodon</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/coten" class="nav-link"><i class="fas fa-fw fa-camera" aria-hidden="true"></i>coten</router-link>
            </li>
        </ul>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'PartialMenu'
}
</script>


<style scoped lang="scss">
    
</style>