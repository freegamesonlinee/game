window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(function() {
            callback();
        }, 1000 / 60);
    };
})();
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
var width = 422,
    height = 552;
canvas.width = width;
canvas.height = height;
var platforms = [],
    shurikens = [],
    image = document.getElementById("sprite"),
    image2 = document.getElementById("sprite2"),
    image3 = document.getElementById("sprite3"),
    image4 = document.getElementById("sprite4"),
    player, platformCount = 10,
    position = 0,
    gravity = 0.2,
    animloop, flag = 0,
    menuloop, broken = 0,
    dir, score = 0,
    firstRun = true;
var Base = function() {
    this.height = 5;
    this.width = width;
    this.cx = 0;
    this.cy = 614;
    this.cwidth = 100;
    this.cheight = 5;
    this.moved = 0;
    this.x = 0;
    this.y = height - this.height;
    this.draw = function() {
        try {
            ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var base = new Base();
var Player = function() {
    this.vy = 11;
    this.vx = 0;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isDead = false;
    this.width = 55;
    this.height = 40;
    this.cx = 0;
    this.cy = 0;
    this.cwidth = 110;
    this.cheight = 80;
    this.dir = "left";
    this.x = width / 2 - this.width / 2;
    this.y = height;
    this.draw = function() {
        try {
            if (this.dir == "up") {
                ctx.drawImage(image3, 0, 0, 66, 78, this.x, this.y, 30, this.height);
                ctx.drawImage(image2, 893, 770, 28, 120, this.x + 10, this.y - 15, 14, 60);
                return;
            } else if (this.dir == "right") this.cy = 121;
            else if (this.dir == "left") this.cy = 201;
            else if (this.dir == "right_land") this.cy = 289;
            else if (this.dir == "left_land") this.cy = 371;
            ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
    this.jump = function() {
        this.vy = -8;
    };
    this.jumpHigh = function() {
        this.vy = -16;
    };
    this.fly = function(item) {
        this.vy = item.speed;
        gravity = 0;
        setTimeout(() => {
            gravity = 0.2;
            item.state = 0;
            item.x = 0 - item.width;
            item.y = 0 - item.height;
        }, item.duration);
    }
    this.fire = function(Bullet) {
        (new Bullet()).init(this.x, this.y);
    }
};
player = new Player();

function Platform() {
    this.width = 70;
    this.height = 17;
    this.x = Math.random() * (width - this.width);
    this.y = position;
    position += (height / platformCount);
    this.flag = 0;
    this.state = 0;
    this.cx = 0;
    this.cy = 0;
    this.cwidth = 105;
    this.cheight = 31;
    this.draw = function() {
        try {
            if (this.type == 1) this.cy = 0;
            else if (this.type == 2) this.cy = 61;
            else if (this.type == 3 && this.flag === 0) this.cy = 31;
            else if (this.type == 3 && this.flag == 1) this.cy = 1000;
            else if (this.type == 4 && this.state === 0) this.cy = 90;
            else if (this.type == 4 && this.state == 1) this.cy = 1000;
            ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
    if (score >= 10000) {
        this.types = [2, 3, 3, 3, 4, 4, 4, 4];
        this.bonuses = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
    } else if (score >= 5000 && score < 10000) {
        this.types = [2, 3, 3, 3, 4, 4, 4, 4];
        this.bonuses = [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5];
    } else if (score >= 2000 && score < 5000) {
        this.types = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
        this.bonuses = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
    } else if (score >= 1000 && score < 2000) {
        this.types = [2, 2, 2, 3, 3, 3, 3, 3];
        this.bonuses = [1, 1, 1, 1, 2, 2];
    } else if (score >= 500 && score < 1000) {
        this.types = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
        this.bonuses = [1, 1, 1, 1, 2];
    } else if (score >= 100 && score < 500) {
        this.types = [1, 1, 1, 1, 2, 2];
        this.bonuses = [1];
    } else {
        this.types = [1];
        this.bonuses = [1];
    }
    this.type = this.types[Math.floor(Math.random() * this.types.length)];
    this.bonus_type = this.bonuses[Math.floor(Math.random() * this.bonuses.length)];
    if (this.type == 3 && broken < 1) {
        broken++;
    } else if (this.type == 3 && broken >= 1) {
        this.type = 1;
        broken = 0;
    }
    this.moved = 0;
    this.vx = 1;
}
for (var i = 0; i < platformCount; i++) {
    platforms.push(new Platform());
}
var Platform_broken_substitute = function() {
    this.height = 30;
    this.width = 70;
    this.x = 0;
    this.y = 0;
    this.cx = 0;
    this.cy = 554;
    this.cwidth = 105;
    this.cheight = 60;
    this.appearance = false;
    this.draw = function() {
        try {
            if (this.appearance === true) ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
            else return;
        } catch (e) {}
    };
};
var platform_broken_substitute = new Platform_broken_substitute();
var propeller = function() {
    this.x = 0;
    this.y = 0;
    this.speed = -8;
    this.duration = 2000;
    this.width = 32;
    this.height = 32;
    this.cx = 873;
    this.cy = 291;
    this.cwidth = 64;
    this.cheight = 64;
    this.state = 0;
    this.draw = function() {
        try {
            ctx.drawImage(image2, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var Propeller = new propeller();
var shuriken = function() {
    this.x = 0;
    this.y = 0;
    this.speed = 8;
    this.alive = true;
    this.width = 20;
    this.height = 20;
    this.cx = 0;
    this.cy = 0;
    this.cwidth = 980;
    this.cheight = 968;
    this.state = 0;
    this.init = function(x, y) {
        this.x = x + 8;
        this.y = y - 30;
        shurikens.push(this);
    };
    this.draw = function() {
        try {
            this.alive && ctx.drawImage(image4, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
    this.update = function() {
        if (this.alive) {
            this.y -= this.speed;
            if (this.y < -1000) {
                this.alive = false;
            }
        }
    };
};
var Shuriken = new shuriken();
var jetpack = function() {
    this.x = 0;
    this.y = 0;
    this.speed = -16;
    this.duration = 1000;
    this.width = 24;
    this.height = 37;
    this.cx = 827;
    this.cy = 835;
    this.cwidth = 48;
    this.cheight = 78;
    this.state = 0;
    this.draw = function() {
        try {
            if (this.state === 0) {
                this.cx = 827;
                this.cy = 835;
                this.cwidth = 48;
                this.cheight = 78;
            } else {
                this.cx = 904;
                this.cy = 512;
                this.cwidth = 64;
                this.cheight = 128;
            }
            ctx.drawImage(image2, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var Jetpack = new jetpack();
var enemy1 = function() {
    this.x = 0;
    this.y = 0;
    this.width = 46;
    this.height = 35;
    this.cx = 873;
    this.cy = 219;
    this.cwidth = 92;
    this.cheight = 71;
    this.state = 0;
    this.draw = function() {
        try {
            if (this.state === 0) {
                this.cy = 219;
                this.cwidth = 92;
            } else if (this.state == 1) {
                this.cwidth = 0;
            }
            ctx.drawImage(image2, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var Enemy1 = new enemy1();
var enemy2 = function() {
    this.x = 0;
    this.y = 0;
    this.width = 55;
    this.height = 50;
    this.cx = 652;
    this.cy = 630;
    this.cwidth = 110;
    this.cheight = 99;
    this.state = 0;
    this.draw = function() {
        try {
            if (this.state === 0) {
                this.cy = 630;
                this.cwidth = 110;
            } else if (this.state == 1) {
                this.cwidth = 0;
            }
            ctx.drawImage(image2, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var Enemy2 = new enemy2();
var spring = function() {
    this.x = 0;
    this.y = 0;
    this.width = 26;
    this.height = 30;
    this.cx = 0;
    this.cy = 0;
    this.cwidth = 45;
    this.cheight = 53;
    this.state = 0;
    this.draw = function() {
        try {
            if (this.state === 0) this.cy = 445;
            else if (this.state == 1) this.cy = 501;
            ctx.drawImage(image, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
        } catch (e) {}
    };
};
var Spring = new spring();
let timeoutId = null;

function init() {
    var dir = "left",
        jumpCount = 0;
    firstRun = false;

    function paintCanvas() {
        ctx.clearRect(0, 0, width, height);
    }

    function playerCalc() {
        if (dir == "left") {
            player.dir = "left";
            if (player.vy < -7 && player.vy > -15) player.dir = "left_land";
        } else if (dir == "right") {
            player.dir = "right";
            if (player.vy < -7 && player.vy > -15) player.dir = "right_land";
        }
        document.onkeydown = function(e) {
            var key = e.keyCode;
            if (key == 37) {
                dir = "left";
                player.isMovingLeft = true;
            } else if (key == 39) {
                dir = "right";
                player.isMovingRight = true;
            } else if (key == 32) {
                dir = "up";
                player.dir = "up";
                player.fire(shuriken);
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    if (player.dir == "up") {
                        player.dir = "right";
                    }
                }, 200);
            }
            if (key == 13) {
                if (firstRun === true)
                    init();
                else
                    reset();
            }
        };
        document.onkeyup = function(e) {
            var key = e.keyCode;
            if (key == 37) {
                dir = "left";
                player.isMovingLeft = false;
            } else if (key == 39) {
                dir = "right";
                player.isMovingRight = false;
            }
        };
        if (player.isMovingLeft === true) {
            player.x += player.vx;
            player.vx -= 0.15;
        } else {
            player.x += player.vx;
            if (player.vx < 0) player.vx += 0.1;
        }
        if (player.isMovingRight === true) {
            player.x += player.vx;
            player.vx += 0.15;
        } else {
            player.x += player.vx;
            if (player.vx > 0) player.vx -= 0.1;
        }
        if (player.vx > 8)
            player.vx = 8;
        else if (player.vx < -8)
            player.vx = -8;
        if ((player.y + player.height) > base.y && base.y < height) player.jump();
        if (base.y > height && (player.y + player.height) > height && player.isDead != "lol") player.isDead = true;
        if (player.x > width) player.x = 0 - player.width;
        else if (player.x < 0 - player.width) player.x = width;
        if (player.y >= (height / 2) - (player.height / 2)) {
            player.y += player.vy;
            player.vy += gravity;
        } else {
            platforms.forEach(function(p, i) {
                if (player.vy < 0) {
                    p.y -= player.vy;
                }
                if (p.y > height) {
                    platforms[i] = new Platform();
                    platforms[i].y = p.y - height;
                }
            });
            base.y -= player.vy;
            player.vy += gravity;
            if (player.vy >= 0) {
                player.y += player.vy;
                player.vy += gravity;
            }
            score++;
        }
        collides();
        if (player.isDead === true) gameOver();
    }

    function springCalc() {
        var s = Spring;
        var p = platforms[0];
        if ((p.type == 1 || p.type == 2) && p.bonus_type === 1) {
            s.x = p.x + p.width / 2 - s.width / 2;
            s.y = p.y - p.height - 10;
            if (s.y > height / 1.1) s.state = 0;
            s.draw();
        } else {
            s.x = 0 - s.width;
            s.y = 0 - s.height;
        }
    }

    function propellerCalc() {
        var pr = Propeller;
        var p = platforms[0];
        if ((p.type == 1 || p.type == 2) && pr.state === 0 && p.bonus_type === 2) {
            pr.x = p.x + p.width / 2 - pr.width / 2;
            pr.y = p.y - p.height - 10;
            pr.draw();
        } else if (pr.state === 1) {
            pr.x = player.x + player.width / 2 - pr.width / 2;
            pr.y = player.y - player.height + pr.height / 2;
            pr.draw();
        }
    }

    function jetpackCalc() {
        var j = Jetpack;
        var p = platforms[0];
        if ((p.type == 1 || p.type == 2) && j.state === 0 && p.bonus_type === 3) {
            j.x = p.x + p.width / 2 - j.width / 2;
            j.y = p.y - p.height - 10;
            j.draw();
        } else if (j.state === 1) {
            if (player.dir === "left") {
                j.x = player.x + player.width / 2;
                j.y = player.y - player.height + j.height + 10;
            } else {
                j.x = player.x;
                j.y = player.y - player.height + j.height + 10;
            }
            j.draw();
        }
    }

    function enemy1Calc() {
        var e1 = Enemy1;
        var p = platforms[0];
        if (p.bonus_type === 4) {
            e1.x = p.x + p.width / 2 - e1.width / 2;
            e1.y = p.y - p.height - 35;
            if (e1.y > height / 1.1) e1.state = 0;
            e1.draw();
        } else {
            e1.x = 0 - e1.width;
            e1.y = 0 - e1.height;
        }
    }

    function enemy2Calc() {
        var e2 = Enemy2;
        var p = platforms[0];
        if (p.bonus_type === 5) {
            e2.x = p.x + p.width / 2 - e2.width / 2;
            e2.y = p.y - p.height - 35;
            if (e2.y > height / 1.1) e2.state = 0;
            e2.draw();
        } else {
            e2.x = 0 - e2.width;
            e2.y = 0 - e2.height;
        }
    }

    function platformCalc() {
        var subs = platform_broken_substitute;
        platforms.forEach(function(p, i) {
            if (p.type == 2) {
                if (p.x < 0 || p.x + p.width > width) p.vx *= -1;
                p.x += p.vx;
            }
            if (p.flag == 1 && subs.appearance === false && jumpCount === 0) {
                subs.x = p.x;
                subs.y = p.y;
                subs.appearance = true;
                jumpCount++;
            }
            p.draw();
        });
        if (subs.appearance === true) {
            subs.draw();
            subs.y += 8;
        }
        if (subs.y > height) subs.appearance = false;
    }

    function collides() {
        platforms.forEach(function(p, i) {
            if (player.vy > 0 && p.state === 0 && (player.x + 15 < p.x + p.width) && (player.x + player.width - 15 > p.x) && (player.y + player.height > p.y) && (player.y + player.height < p.y + p.height)) {
                if (p.type == 3 && p.flag === 0) {
                    p.flag = 1;
                    jumpCount = 0;
                    return;
                } else if (p.type == 4 && p.state === 0) {
                    player.jump();
                    p.state = 1;
                } else if (p.flag == 1) return;
                else {
                    player.jump();
                }
            }
        });
        var pr = Propeller;
        if (pr.state === 0 && (player.x + 15 < pr.x + pr.width) && (player.x + player.width - 15 > pr.x) && (player.y + player.height > pr.y) && (player.y + player.height < pr.y + pr.height)) {
            pr.state = 1;
            player.fly(pr);
        }
        var j = Jetpack;
        if (j.state === 0 && (player.x + 15 < j.x + j.width) && (player.x + player.width - 15 > j.x) && (player.y + player.height > j.y) && (player.y + player.height < j.y + j.height)) {
            j.state = 1;
            player.fly(j);
        }
        var s = Spring;
        if (player.vy > 0 && (s.state === 0) && (player.x + 15 < s.x + s.width) && (player.x + player.width - 15 > s.x) && (player.y + player.height > s.y) && (player.y + player.height < s.y + s.height)) {
            s.state = 1;
            player.jumpHigh();
        }
        var e1 = Enemy1;
        if (player.vy > 0 && (e1.state === 0) && (player.x + 15 < e1.x + e1.width) && (player.x + player.width - 15 > e1.x) && (player.y + player.height > e1.y) && (player.y + player.height < e1.y + e1.height)) {
            e1.state = 1;
            player.jump();
        } else if (player.vy < 0 && (e1.state === 0) && (player.x + 15 < e1.x + e1.width) && (player.x + player.width - 15 > e1.x) && (player.y + player.height > e1.y) && (player.y + player.height < e1.y + e1.height)) {
            player.isDead = true;
            gameOver();
        } else if (e1.state === 0) {
            for (var ix = shurikens.length; ix--;) {
                if (shurikens[ix].alive && (shurikens[ix].x + shurikens[ix].width / 2 > e1.x) && (shurikens[ix].x + shurikens[ix].width / 2 < e1.x + e1.width) && (shurikens[ix].y - shurikens[ix].width / 2 > e1.y) && (shurikens[ix].y - shurikens[ix].width / 2 < e1.y + e1.height)) {
                    e1.state = 1;
                    shurikens[ix].alive = false;
                }
            }
        }
        var e2 = Enemy2;
        if (player.vy > 0 && (e2.state === 0) && (player.x + 15 < e2.x + e2.width) && (player.x + player.width - 15 > e2.x) && (player.y + player.height > e2.y) && (player.y + player.height < e2.y + e2.height)) {
            e2.state = 1;
            player.jump();
        } else if (player.vy < 0 && (e2.state === 0) && (player.x + 15 < e2.x + e1.width) && (player.x + player.width - 15 > e2.x) && (player.y + player.height > e2.y) && (player.y + player.height < e2.y + e2.height)) {
            player.isDead = true;
            gameOver();
        } else if (e2.state === 0) {
            for (var ix = shurikens.length; ix--;) {
                if (shurikens[ix].alive && (shurikens[ix].x + shurikens[ix].width / 2 > e2.x) && (shurikens[ix].x + shurikens[ix].width / 2 < e2.x + e2.width) && (shurikens[ix].y - shurikens[ix].width / 2 > e2.y) && (shurikens[ix].y - shurikens[ix].width / 2 < e2.y + e2.height)) {
                    e2.state = 1;
                    shurikens[ix].alive = false;
                }
            }
        }
    }

    function updateScore() {
        var scoreText = document.getElementById("score");
        scoreText.textContent = score;
    }

    function gameOver() {
        platforms.forEach(function(p, i) {
            p.y -= 12;
        });
        if (player.y > height / 2 && flag === 0) {
            player.y -= 8;
            player.vy = 0;
        } else if (player.y < height / 2) flag = 1;
        else if (player.y + player.height > height) {
            try {
                SocialModuleInstance && SocialModuleInstance.showSocial();
            } catch (e) {}
            showGoMenu();
            hideScore();
            player.isDead = "lol";
        }
    }

    function update() {
        paintCanvas();
        platformCalc();
        springCalc();
        playerCalc();
        player.draw();
        base.draw();
        for (var ix = shurikens.length; ix--;) {
            shurikens[ix].update();
            shurikens[ix].draw();
        }
        propellerCalc();
        jetpackCalc();
        enemy1Calc();
        enemy2Calc();
        updateScore();
    }
    menuLoop = function() {
        return;
    };
    animloop = function() {
        update();
        requestAnimFrame(animloop);
    };
    animloop();
    hideMenu();
    showScore();
}

function reset() {
    hideGoMenu();
    showScore();
    player.isDead = false;
    flag = 0;
    position = 0;
    score = 0;
    base = new Base();
    player = new Player();
    Spring = new spring();
    Propeller = new propeller();
    Jetpack = new jetpack();
    Enemy1 = new enemy1();
    Enemy2 = new enemy2();
    platform_broken_substitute = new Platform_broken_substitute();
    platforms = [];
    shurikens = [];
    for (var i = 0; i < platformCount; i++) {
        platforms.push(new Platform());
    }
}

function hideMenu() {
    var menu = document.getElementById("mainMenu");
    menu.style.zIndex = -1;
}

function showGoMenu() {
    var menu = document.getElementById("gameOverMenu");
    menu.style.zIndex = 1;
    menu.style.visibility = "visible";
    var scoreCount = document.getElementById("go_score");
    scoreCount.textContent = score;
    var best_score = parseInt(localStorage['best_score']) || 0;
    if (best_score < score) {
        localStorage['best_score'] = score;
        document.getElementById('go_best_score').textContent = score;
    }
}

function hideGoMenu() {
    var menu = document.getElementById("gameOverMenu");
    menu.style.zIndex = -1;
    menu.style.visibility = "hidden";
}

function showScore() {
    var menu = document.getElementById("scoreBoard");
    menu.style.zIndex = 1;
}

function hideScore() {
    var menu = document.getElementById("scoreBoard");
    menu.style.zIndex = -1;
}

function playerJump() {
    player.y += player.vy;
    player.vy += gravity;
    if (player.vy > 0 && (player.x + 15 < 260) && (player.x + player.width - 15 > 155) && (player.y + player.height > 475) && (player.y + player.height < 500))
        player.jump();
    if (dir == "left") {
        player.dir = "left";
        if (player.vy < -7 && player.vy > -15) player.dir = "left_land";
    } else if (dir == "right") {
        player.dir = "right";
        if (player.vy < -7 && player.vy > -15) player.dir = "right_land";
    }
    document.onkeydown = function(e) {
        var key = e.keyCode;
        if (key == 37) {
            dir = "left";
            player.isMovingLeft = true;
        } else if (key == 39) {
            dir = "right";
            player.isMovingRight = true;
        } else if (key == 32) {
            dir = "up";
            player.dir = "up";
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (player.dir == "up") {
                    player.dir = "right";
                }
            }, 200);
        }
        if (key == 13) {
            if (firstRun === true) {
                init();
                firstRun = false;
            } else {
                reset();
            }
        }
    };
    document.onkeyup = function(e) {
        var key = e.keyCode;
        if (key == 37) {
            dir = "left";
            player.isMovingLeft = false;
        } else if (key == 39) {
            dir = "right";
            player.isMovingRight = false;
        }
    };
    if (player.isMovingLeft === true) {
        player.x += player.vx;
        player.vx -= 0.15;
    } else {
        player.x += player.vx;
        if (player.vx < 0) player.vx += 0.1;
    }
    if (player.isMovingRight === true) {
        player.x += player.vx;
        player.vx += 0.15;
    } else {
        player.x += player.vx;
        if (player.vx > 0) player.vx -= 0.1;
    }
    if ((player.y + player.height) > base.y && base.y < height) player.jump();
    if (player.x > width) player.x = 0 - player.width;
    else if (player.x < 0 - player.width) player.x = width;
    player.draw();
}

function update() {
    ctx.clearRect(0, 0, width, height);
    playerJump();
}
menuLoop = function() {
    update();
    requestAnimFrame(menuLoop);
};
document.addEventListener("DOMContentLoaded", function(event) {
    var best_score = parseInt(localStorage['best_score']) || 0;
    document.getElementById('best_score').textContent = best_score;
    document.getElementById('go_best_score').textContent = best_score;
    menuLoop();
    document.getElementById('start_btn').addEventListener('click', function() {
        init();
    });
    document.getElementById('restart_btn').addEventListener('click', function() {
        reset();
    });
});