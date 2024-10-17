const canvas = document.querySelector('canvas') 
        const $ = canvas.getContext('2d') 
        canvas.width = window.innerWidth 
        canvas.height = window.innerHeight 
        $.fillStyle='LemonChiffon' 
        //(тело ) 
        $.fillRect(300,330, 50, 90) 
        $.fillStyle='Gold' 
        //(голова) 
        $.fillRect(290,300, 55, 40) 
        //(конечности ) 
        $.fillRect(270,360, 20, 20) 
        $.fillRect(320,370, 20, 20) 
        $.fillRect(300,420, 10, 15) 
        $.fillRect(340,420, 10, 15) 
        //(хвост) 
        $.fillRect(350,400, 60, 15) 
        $.fillRect(355,350, 40, 15) 
        $.fillRect(370,380, 20, 15) 
 
        //(по x, по y, длинна, ширина ) 
        $.fillStyle='green' 
        //(гребни) 
        $.fillRect(290,290, 70, 15)  
        $.fillRect(290,280, 50, 15)  
        $.fillRect(290,270, 30, 15)  
        $.fillRect(345,320, 15, 60) 
        //(хвост) 
        $.fillRect(395,350, 15, 50) 
        $.fillRect(355,365, 15, 30) 
        $.fillRect(377,367, 13, 15) 
 
        //(очки) 
        $.fillStyle='black' 
        $.fillRect(285,310, 20, 10) 
        $.fillRect(290,320, 13, 8) 
        $.fillRect(300,320, 20, 5) 
        $.fillRect(315,310, 20, 10) 
        $.fillRect(315,320, 13, 8) 
 
        //(детали) 
        $.fillStyle='lime'// глаза 
        $.fillRect(318,315, 3, 3) 
        $.fillRect(290,315, 3, 3) 
        $.fillStyle='DarkOrange'// щека? 
        $.fillRect(330,330, 3, 3) 
        $.fillRect(330,325, 3, 3) 
        $.fillRect(333,328, 3, 3) 
        $.fillRect(336,325, 3, 3) 
        $.fillRect(336,330, 3, 3) 