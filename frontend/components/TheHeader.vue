<template>
  <!-- Header -->
  <header>
    <div class="header-container">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-4 col-md-5 hidden-xs">
              <!-- Default Welcome Message -->
              <div class="welcome-msg ">
                {{ $t('welcome') }}!
              </div>

              <span class="phone hidden-sm">{{ $t('call_us') }}: +123.456.789</span>
            </div>

            <!-- top links -->
            <div class="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
              <div class="links">
                <div class="myaccount">
                  <a title="My Account" href="account_page.html"><i class="fa fa-user" /><span class="hidden-xs">{{ $t('my_account') }}</span></a>
                </div>
                <div class="wishlist">
                  <a title="My Wishlist" href="wishlist.html"><i class="fa fa-heart" /><span class="hidden-xs">{{ $t('wishlist') }}</span></a>
                </div>
                <div class="blog">
                  <a title="Blog" href="blog.html"><i class="fa fa-rss" /><span class="hidden-xs">{{ $t('blog') }}</span></a>
                </div>
                <div class="login">
                  <a href="account_page.html"><i class="fa fa-unlock-alt" /><span class="hidden-xs">{{ $t('log_in') }}</span></a>
                </div>
              </div>
              <div class="language-currency-wrapper">
                <div class="inner-cl">
                  <div class="block block-language form-language">
                    <div class="lg-cur">
                      <span> <img :src="'images/flag-'+currentLocale.code+'.jpg'" :alt="currentLocale.code"> <span class="lg-fr">{{ currentLocale.title }}</span><i class="fa fa-angle-down" /></span>
                    </div>
                    <ul>
                      <li v-for="(locale_,ind) in $root.context.app.i18n.locales" :key="ind">
                        <a :class="{'selected':currentLocale==locale_.code}" @click="switchLocalePath(locale_)"> <img :src="'images/flag-'+locale_.code+'.jpg'" alt="flag"> <span>{{ locale_.titleLong }}</span> </a>
                      </li>
                    </ul>
                  </div>
                  <div class="block block-currency">
                    <div class="item-cur">
                      <span>USD </span> <i class="fa fa-angle-down" />
                    </div>
                    <ul>
                      <li> <a href="#"><span class="cur_icon">€</span> EUR</a> </li>
                      <li> <a href="#"><span class="cur_icon">¥</span> JPY</a> </li>
                      <li> <a class="selected" href="#"><span class="cur_icon">$</span> USD</a> </li>
                    </ul>
                  </div>
                </div>

                <!-- End Default Welcome Message -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3 col-xs-12">
            <!-- Header Logo -->
            <div class="logo">
              <a title="e-commerce" href="index.html"><img alt="e-commerce" src="images/logo.png"></a>
            </div>
            <!-- End Header Logo -->
          </div>
          <div class="col-xs-9 col-sm-6 col-md-6 col-lg-7">
            <!-- Search -->

            <div class="top-search">
              <div id="search">
                <form>
                  <div class="input-group">
                    <select class="cate-dropdown hidden-xs" name="category_id">
                      <option>All Categories</option>
                      <option>women</option>
                      <option>&nbsp;&nbsp;&nbsp;Accessories </option>
                      <option>&nbsp;&nbsp;&nbsp;Dresses</option>
                      <option>&nbsp;&nbsp;&nbsp;Top</option>
                      <option>&nbsp;&nbsp;&nbsp;Handbags </option>
                      <option>&nbsp;&nbsp;&nbsp;Shoes </option>
                      <option>&nbsp;&nbsp;&nbsp;Clothing </option>
                      <option>Men</option>
                      <option>Electronics</option>
                      <option>&nbsp;&nbsp;&nbsp;Mobiles </option>
                      <option>&nbsp;&nbsp;&nbsp;Music &amp; Audio </option>
                    </select>
                    <input type="text" class="form-control" placeholder="Search" name="search">
                    <button class="btn-search" type="button">
                      <i class="fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- End Search -->
          </div>
          <!-- top cart -->

          <div class="col-lg-2 col-xs-3 top-cart">
            <div class="top-cart-contain">
              <div class="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
                  <a href="#">
                    <div class="cart-icon"><i class="fa fa-shopping-basket" /></div>
                    <div class="shoppingcart-inner hidden-xs"><span class="cart-title">Basket</span> <span class="cart-total">4 Item(s)</span></div>
                  </a>
                </div>
                <div>
                  <div class="top-cart-content">
                    <div class="block-subtitle hidden-xs">
                      Recently added item(s)
                    </div>
                    <ul id="cart-sidebar" class="mini-products-list">
                      <li class="item odd">
                        <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="images/products/img01.jpg" alt="Lorem ipsum dolor" width="65"></a>
                        <div class="product-details">
                          <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close" /></a>
                          <p class="product-name">
                            <a href="shopping_cart.html">Lorem ipsum dolor sit amet Consectetur</a>
                          </p>
                          <strong>1</strong> x <span class="price">$20.00</span>
                        </div>
                      </li>
                      <li class="item even">
                        <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="images/products/img01.jpg" alt="Lorem ipsum dolor" width="65"></a>
                        <div class="product-details">
                          <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close" /></a>
                          <p class="product-name">
                            <a href="shopping_cart.html">Consectetur utes anet adipisicing elit</a>
                          </p>
                          <strong>1</strong> x <span class="price">$230.00</span>
                        </div>
                      </li>
                      <li class="item last odd">
                        <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="images/products/img01.jpg" alt="Lorem ipsum dolor" width="65"></a>
                        <div class="product-details">
                          <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close" /></a>
                          <p class="product-name">
                            <a href="shopping_cart.html">Sed do eiusmod tempor incidist</a>
                          </p>
                          <strong>2</strong> x <span class="price">$420.00</span>
                        </div>
                      </li>
                    </ul>
                    <div class="top-subtotal">
                      Subtotal: <span class="price">$520.00</span>
                    </div>
                    <div class="actions">
                      <button class="btn-checkout" type="button">
                        <i class="fa fa-check" /><span>Checkout</span>
                      </button>
                      <button class="view-cart" type="button">
                        <i class="fa fa-shopping-basket" /> <span>View Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      currentLocale: {
        code: this.$root.context.app.i18n.defaultLocale,
        title: this.$root.context.app.i18n.defaultLocaleTitle,
        titleLong: this.$root.context.app.i18n.defaultLocaleTitleLong
      },
      currentCurrency: {

      },
      currencies: [
        { key: 'usd', title: 'USD', sign: '$' }
      ]
    }
  },
  methods: {
    switchLocalePath (locale) {
      this.$root.context.app.i18n.setLocale(locale.code)
      this.currentLocale = locale
    }
  }
}
</script>
