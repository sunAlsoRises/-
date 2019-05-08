<template>
  <footer role="contentinfo" id="footerArea" class="footer-base">
    <div class="wrapper wrapper--1-down content-area">

      <!--

    Visually hidden jump to navigation link to go at the bottom of long content areas,
    especially those with many focusable areas.

    Remove the hidden helper class to make this link visible to all users.

  -->
      <a href="#page" class="jump-to-nav jump-to-nav--hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        跳到顶部
      </font></font></a>

      <div class="grid grid--footer">

        <div class="w-20 w-33--m">
          <h1 class="footer__heading txt-h5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            网站
          </font></font></h1>
          <ul ul_attributes="nav-group nav-group--top-bar" display_stickynav="yes" class="list-clean"><li class="menu-449 first"><a href="http://www.accessibility.harvard.edu/" title="无障碍@ 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无障碍</font></font></a></li>
            <li class="menu-683 last"><a href="/sitemap" title="网站地图@ 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站地图</font></font></a></li>
          </ul>      </div>

        <div class="w-20 w-33--m">
          <h2 class="footer__heading txt-h5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            保持联系
          </font></font></h2>
          <ul ul_attributes="nav-group nav-group--top-bar" display_stickynav="yes" class="list-clean"><li class="menu-660 first"><a href="/contact-harvard" title="联系@ 2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联系南华</font></font></a></li>
            <li class="menu-2078"><a href="/about-harvard/maps-directions" title=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图和方向</font></font></a></li>
            <li class="menu-2383"><a href="http://hr.harvard.edu/jobs" title=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font></font></a></li>
            <li class="menu-2384 last"><a href="/about-harvard/social-media-and-newsletter-directory" title=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社交媒体</font></font></a></li>
          </ul>      </div>

        <div class="w-20 w-33--m">
          <h3 class="footer__heading txt-h5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            安全与品牌
          </font></font></h3>
          <ul ul_attributes="nav-group nav-group--top-bar" display_stickynav="yes" class="list-clean"><li class="menu-448 first"><a href="/privacy-statement" title="隐私@ 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐私声明</font></font></a></li>
            <li class="menu-447"><a href="/copyright-issue" title="侵权@ 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告版权侵权</font></font></a></li>
            <li class="menu-861"><a href="/security-issue" title="报告安全问题"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告安全问题</font></font></a></li>
            <li class="menu-446 last"><a href="" title="TrademarkNotice @ 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商标声明</font></font></a></li>
          </ul>      </div>

        <div class="w-footer-last">
          <h4 class="footer__heading txt-h5 is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            社交媒体和其他应用程序链接
          </font></font></h4>

          <ul class="list-social-links list-clean hidden-xs hidden-sm">
            <li>
              <a href="#" class="social-link social-link--facebook">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  微信公众号
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="#" class="social-link social-link--twitter">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  抖音
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="#" class="social-link social-link--instagram">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  新浪博客的
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="#" class="social-link social-link--youtube">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  新浪微博的
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/harvard" class="social-link social-link--soundcloud">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  的SoundCloud
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/edu/school?id=18483" class="social-link social-link--linkedin">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  LinkedIn
                </font></font></span>
              </a>
            </li>
            <li>
              <a href="http://www.harvard.edu/itunes" class="social-link social-link--itunes">
                <span class="is-visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                  iTunes的
                </font></font></span>
              </a>
            </li>
          </ul>
          <p class="w-60 other-apps">
            <a href="/all-harvard-mobile"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
              南华应用程序
            </font></font></a>
          </p>

        </div>


      </div> <!-- end footer grid -->

      <p class="footer__outro"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ©2019南华大学校长和研究员
      </font></font></p>

    </div>
  </footer>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            goTo(path){
                this.$router.replace(path);
            }
        }
    }
</script>

<style>
  .footer-base {
    background: #414141;
    color: #d2d7d3;
    min-height: 100px;
    padding: 1.25em 0;
  }
  .content-area {
    padding: 1.25em;
  }
  .wrapper--1-down {
    max-width: 1120px;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1340px;
    padding: 1.25em;
    position: relative;
  }
  .footer-base .jump-to-nav--hidden {
    background: #a51c30;
    color: #fff;
    font-size: 1em;
    opacity: 0;
    position: absolute;
    pointer-events: none;
    height: 1px;
    overflow: hidden;
    padding: 0;
    right: 0;
    text-decoration: none;
    top: -50px;
    -webkit-transition: -webkit-transform .2s, opacity .2s;
    transition: transform .2s, opacity .2s;
  }
  .footer-base a {
    text-decoration: none;
  }
  .footer-base a, .footer-base .footer__outro {
    font-size: .75em;
  }
  .footer-base a, .footer-base .footer__heading {
    color: #d2d7d3;
  }
  .wrapper>.grid:last-of-type {
    margin-bottom: 0;
  }
  .grid {
    margin-left: -1.25em;
    height: 240px;
  }
  li {
    line-height: 1.75em;
  }
  .grid>[class*="w-"] {
    float: left;
    margin-bottom: 0;
    min-height: 1px;
    padding-left: 1.25em;
    position: relative;
  }
  .w-20 {
    width: 20%;
  }
  .footer-base a, .footer-base .footer__heading {
    color: #d2d7d3;
  }
  .txt-uppercase, h5, .txt-h5, h6, .txt-h6, .card__outro__cta-2 a {
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .footer-base .footer__outro {
    border-top: 1px solid #d2d7d3;
    margin-top: 14px;
    padding-top: 4px;
  }
  .footer-base a, .footer-base .footer__outro {
    font-size: .75em;
  }
  .card--event__time, .footer-base a, .footer-base .footer__outro {
    font-family: 'Merriweather Sans Light', Arial, sans-serif;
    font-weight: 300;
    font-style: normal;
  }
</style>