tailwind.config = {
    theme: {
      extend: {
        // My Custom code start 
       
        // All color part start 
        colors:{
          headercolor:"rgba(22, 12, 109, 0.50)",
          hovercolor:"#1BBF00",
          hovercolortwo:"rgba(107, 98, 197, 1)",
          overlycolor:"rgba(106, 98, 197, 0.90)",
          clientscolor:"#141135",
          fontcolorone:"rgba(114, 110, 158, 1)",
          fontcolortwo:"rgba(108, 125, 147, 1)",
          Wwdcolor:"rgba(246, 245, 255, 1)",
          buttoncolor:"rgb(130, 170, 125)",
          buttonhover:"rgba(181, 246, 202, 0.622)",
          cardhoverbg:"rgba(236, 237, 240, 1)",
          textcolorone:"rgba(27, 191, 0, 1)",
          cardbgcolor:"rgba(255, 255, 255, 1)",
          rightbgcolor:"rgba(249, 249, 251, 1)",
          cardheadcolor: "#FAFAFE",
          Aboutcolor: "#F8F8FF",
          Scolor: "#FF7628",
          likebgcolor: "#F9F9FB",
          footerbgcolor: "#48409C",
        },
        // All color part end
        // All containers start
        maxWidth: {
          headercontainer: '1170px',
          bannercontainer: '962px',
          aboutcontainer: '700px',
          

        },
        // All containers end 
        // Font Family
        fontFamily: {
          open: ['Open Sans', 'sans-serif'],
          papri:['Paprika', 'cursive'], 
          nunito:['Nunito','sans-serif'], 
          sand:['Quicksand', 'sans-serif'], 
          Dan:['Dancing Script','cursive'], 
        },
        // Font Family
        // Background Images Start
        backgroundImage: {
          bannerbg: "url('Images/bg.jpg')",
          counterbg: "url('Images/bg 1.jpg')",
          C_rightbg: "url('Images/rightbg.jpg')",
          Choosebg: "url('Images/bg 2.jpg')",
          Impactbg: "url('Images/impactbg.jpg')",
          Likebg: "url('Images/likebg.jpg')",
          
        },
        // Background Images End
        // My Custom code End 
      }
    }
  }