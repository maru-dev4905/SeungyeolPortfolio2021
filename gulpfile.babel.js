import gulp             from "gulp";
import del              from "del";
import image            from "gulp-imagemin";
import bro              from "gulp-bro";
import babelify         from "babelify";
import autoprefixer     from "gulp-autoprefixer";
import concat           from "gulp-concat";
import connect          from "gulp-connect";
import changed          from "gulp-changed";
import cleanCSS         from "gulp-clean-css";
import gPug             from "gulp-pug";
import sass             from "gulp-sass";

sass.compiler           = require("node-sass");

const DEV_SRC           = "src";
const PUB_SRC           = "dest";

const paths = {
    "dev" : {
        "mainJs"        : DEV_SRC + "/js/main/*.js"
       ,"subJs"         : DEV_SRC + "/js/sub/*.js"
       ,"commonJs"      : DEV_SRC + "/js/common/*.js"
       ,"jsPlugin"      : DEV_SRC + "/plugin/js/*.js"
       ,"cssPlugin"     : DEV_SRC + "/plugin/css/*.css"
       ,"css"           : DEV_SRC + "/css/**/**/*.scss"
       ,"img"           : DEV_SRC + "/images/**"
       ,"html"          : DEV_SRC + "/html/*.pug"
       ,"favicons"      : PUB_SRC + "/favicons/*.jpg"
       ,"fonts"         : DEV_SRC + "/fonts/*.*"
       ,"json"          : DEV_SRC + "/js/json/*.json"
    },
    "pub" : {
          "mainJs"      : PUB_SRC + "/js"
         ,"subJs"       : PUB_SRC + "/js"
         ,"commonJs"    : PUB_SRC + "/js"
         ,"jsPlugin"    : PUB_SRC + "/plugin/js/"
         ,"cssPlugin"   : PUB_SRC + "/plugin/css/"
         ,"css"         : PUB_SRC + "/css/"
         ,"img"         : PUB_SRC + "/images"
         ,"html"        : PUB_SRC + "/"
         ,"favicons"    : PUB_SRC + "/images/favicon"
         ,"fonts"       : PUB_SRC + "/fonts"
         ,"json"        : PUB_SRC + "/js/json"
    },
    "watch" : {
          "mainJs"      : DEV_SRC + "/js/main/*.js"
         ,"subJs"       : DEV_SRC + "/js/sub/*.js"
         ,"commonJs"    : DEV_SRC + "/js/common/*.js"
         ,"jsPlugin"    : DEV_SRC + "/plugin/js/*.js"
         ,"cssPlugin"   : DEV_SRC + "/plugin/css/*.css"
         ,"css"         : DEV_SRC + "/css/**/**/*.scss"
         ,"img"         : DEV_SRC + "/images/**"
         ,"html"        : DEV_SRC + "/html/**/*.pug"
         ,"favicons"    : DEV_SRC + "/favicons/*"
         ,"fonts"       : DEV_SRC + "/fonts/*.*"
         ,"json"        : DEV_SRC + "/js/json/*.json"
    }
}

const gulp_mainJs = () =>
    gulp
        .src(paths.dev.mainJs)
        .pipe(bro({
            transform:[
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify",{global:true}]
            ]})
        )
        .pipe(concat("main.js"))
        .pipe(gulp.dest(paths.pub.mainJs))

const gulp_json = () =>
    gulp
        .src(paths.dev.json)
        .pipe(gulp.dest(paths.pub.json))

const gulp_subJs = () =>
    gulp
        .src(paths.dev.subJs)
        .pipe(bro({
            transform:[
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify",{global:true}]
            ]})
        )
        .pipe(concat("sub.js"))
        .pipe(gulp.dest(paths.pub.subJs))

const gulp_commonJs = () =>
    gulp
        .src(paths.dev.commonJs)
        .pipe(bro({
            transform:[
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify",{global:true}]
            ]})
        )
        .pipe(concat("common.js"))
        .pipe(gulp.dest(paths.pub.commonJs))

const gulp_jsPlugin = () =>
    gulp
        .src(paths.dev.jsPlugin)
        .pipe(gulp.dest(paths.pub.jsPlugin))

const gulp_cssPlugin = () =>
    gulp
        .src(paths.dev.cssPlugin)
        .pipe(gulp.dest(paths.pub.cssPlugin))

const gulp_fonts = () =>
    gulp
        .src(paths.dev.fonts)
        .pipe(gulp.dest(paths.pub.fonts));
    
const gulp_css = () =>
    gulp
        .src(paths.dev.css)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.pub.css))

const gulp_html = () =>
    gulp
        .src(paths.dev.html)
        .pipe(gPug())
        .pipe(gulp.dest(paths.pub.html))

const gulp_image = () =>
    gulp
        .src(paths.dev.img)
        .pipe(changed(paths.pub.img))
        .pipe(image())
        .pipe(gulp.dest(paths.pub.img))

const gulp_favicon = () =>
    gulp
        .src(paths.dev.favicons)
        .pipe(image())
        .pipe(gulp.dest(paths.pub.favicons))

const gulp_watch = () =>
    gulp.watch(paths.watch.mainJs       , gulp_mainJs);
    gulp.watch(paths.watch.subJs        , gulp_subJs);
    gulp.watch(paths.watch.commonJs     , gulp_commonJs);
    gulp.watch(paths.watch.css          , gulp_css);
    gulp.watch(paths.watch.html         , gulp_html);
    gulp.watch(paths.watch.img          , gulp_image);
    gulp.watch(paths.watch.fonts        , gulp_fonts);
    gulp.watch(paths.watch.favicons     , gulp_favicon);
    gulp.watch(paths.watch.jsPlugin     , gulp_jsPlugin);
    gulp.watch(paths.watch.cssPlugin    , gulp_cssPlugin);
    gulp.watch(paths.watch.json         , gulp_json);

const webserver = () =>
    connect.server({
          root : PUB_SRC
        , livereload : true
        , port : 8001
    })

const clean = () => del([PUB_SRC + "/*"]);

const prepare = gulp.series([
     clean
    ,gulp_image
    ,gulp_favicon
    ,gulp_fonts
]);

const assets = gulp.series([
    gulp_html
    ,gulp_css
    ,gulp_mainJs
    ,gulp_subJs
    ,gulp_commonJs
    ,gulp_jsPlugin
    ,gulp_cssPlugin
    ,gulp_json
]);

const live = gulp.parallel([
     webserver
    ,gulp_watch
]);

export const build = gulp.series([
     prepare
    ,assets
    ,live
]);