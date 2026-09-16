/* 自定义标签插件。Hexo 会自动加载 scripts/ 下的 js。
 *
 * 用法（写在文章 markdown 里）：
 *   {% bilibili BV1xx411c7mD %}          B 站视频，自适应 16:9
 *   {% bilibili BV1xx411c7mD 2 %}        指定分 P
 *   {% video /img/demo.mp4 %}            自托管短片
 *   {% video /img/demo.mp4 /img/p.jpg %} 带封面图
 *
 * 为什么视频优先用 B 站：GitHub 单文件超 100MiB 直接拒绝、超 50MiB 警告，
 * 且 git 历史会永久保留大文件——视频自托管会把仓库撑死，且不可逆。
 * 自托管只留给几 MB 以内的演示短片。
 */

// ---------- B 站 ----------
hexo.extend.tag.register('bilibili', function (args) {
  const bvid = (args[0] || '').trim();
  const page = (args[1] || '1').trim();
  if (!/^BV[0-9A-Za-z]+$/.test(bvid)) {
    return `<p style="color:#c35a4a">bilibili 标签需要一个 BV 号，收到的是：${bvid || '(空)'}</p>`;
  }
  const src = `https://player.bilibili.com/player.html?bvid=${bvid}&page=${page}`
            + `&high_quality=1&danmaku=0&autoplay=0`;
  return `<div class="embed-video">
  <iframe src="${src}" scrolling="no" frameborder="no" framespacing="0"
          allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer"></iframe>
</div>`;
});

// ---------- 自托管短片 ----------
hexo.extend.tag.register('video', function (args) {
  const src = (args[0] || '').trim();
  const poster = (args[1] || '').trim();
  if (!src) return `<p style="color:#c35a4a">video 标签需要一个文件路径</p>`;
  return `<div class="embed-video">
  <video controls playsinline preload="metadata"${poster ? ` poster="${poster}"` : ''}>
    <source src="${src}">
    你的浏览器不支持内嵌视频，<a href="${src}">点这里下载</a>。
  </video>
</div>`;
});
