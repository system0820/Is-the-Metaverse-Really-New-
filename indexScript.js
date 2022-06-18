
document.addEventListener('DOMContentLoaded', startFn);

function startFn()
{
    let menu = document.querySelectorAll('#menu p');
    let contents = document.querySelectorAll('#container > h2');

    let targetPos;
    let nowPos = 0;

    let myAnimation;


    for(let i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', function()
        {
            cancelAnimationFrame(myAnimation);
            let index = this.getAttribute('clickNum');
            
            targetPos = contents[index].offsetTop-130;

            myAnimation = requestAnimationFrame(moveTo);
        });
    }

    window.addEventListener('scroll', scrollFn);

    function scrollFn()
    {
        nowPos = pageYOffset
    }

    function moveTo()
    {
        nowPos = nowPos + (targetPos - nowPos) * 0.1;
        window.scroll(0, nowPos)

        if( Math.abs(targetPos - nowPos) <= 1)
        {
            cancelAnimationFrame(myAnimation);
        }
        else
        {
            myAnimation = requestAnimationFrame(moveTo);
        }


    }


}