window.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--mouseX", e.x + "px")
    document.documentElement.style.setProperty("--mouseY", e.y + "px")
});
var skillsArray = [
    {
      "label": "React",
      "image": "./assets/skills/react.png"
    },
    {
      "label": "Redux",
      "image": "./assets/skills/redux-283024.png"
    },
    {
      "label": "JavaScript",
      "image": "./assets/skills/js.jpg"
    },
    {
      "label": "HTML5",
      "image": "./assets/skills/html.jpg"
    },
    {
      "label": "CSS3",
      "image": "./assets/skills/css.png"
    },
    {
      "label": "TypeScript",
      "image": "./assets/skills/ts.png"
    },
    {
      "label": "Sass",
      "image": "./assets/skills/sass.png"
    },
    {
      "label": "Power BI",
      "image": "./assets/skills/pbi.png"
    },
    {
      "label": "Gulp",
      "image": "./assets/skills/gulp.png"
    },
    {
      "label": "Webpack",
      "image": "./assets/skills/webpack.png"
    },
    {
      "label": "Jest",
      "image": "./assets/skills/jest.png"
    },
    {
      "label": "npm",
      "image": "./assets/skills/npm.png"
    },
    {
      "label": "SharePoint",
      "image": "./assets/skills/sharepoint.png"
    },
    {
      "label": "MS Dynamics 365",
      "image": "./assets/skills/msdynamics.png"
    },
    {
      "label": "VS Code",
      "image": "./assets/skills/vscode.png"
    },
    {
      "label": "Sketch",
      "image": "./assets/skills/sketch.svg"
    },
    {
      "label": "Figma",
      "image": "./assets/skills/figma.png"
    }
    ];
    
    let maxLength = 0;
    
    for(let i = 0; i < skillsArray.length; i++) {
      if(skillsArray[i].label.length > maxLength) {
        maxLength = skillsArray[i].label.length;
      }
      skillsArray[i].id = i;
    }
    
    let tmp;
    
    for(var i = 0; i < skillsArray.length; i++) {
      if(skillsArray[i].label.length != maxLength) {
        tmp = skillsArray[i].label;
        skillsArray[i].label = "";
        for(let j = 0; j < Math.floor((maxLength - tmp.length)/2); j++) {
            skillsArray[i].label += " ";
        }
        skillsArray[i].label += tmp;
        for(let j = skillsArray[i].label.length; j < maxLength; j++) {
            skillsArray[i].label += " ";
        }
      }
    }   

    document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
        let nodes = new vis.DataSet(skillsArray);
        let edges = new vis.DataSet();
        let container = document.getElementById('bubbles');
        let data = {
        nodes: nodes,
        edges: edges
        };
        
        let options = {
        interaction:{hover:true},
        nodes: {
            borderWidth:0,
            font:{color:'#333'}, 
            "shape": "image",
            scaling: {
                min: 30, 
                max: 30, 
                label: {min: 40, max: 50, enabled: false}
            }
        },
        physics: {
            stabilization: true,
            barnesHut: {
                gravitationalConstant: -700,
                centralGravity: 0.3,
                springLength: 150,
                springConstant: 0.04,
                damping: 0.09,
                avoidOverlap: 0
            },
            solver: 'barnesHut',
            stabilization: false,
            timestep: 0.5,  
            adaptiveTimestep: true
        }
        };
        
        let network = new vis.Network(container, data, options);
        
        // Events
        network.on("click", function(e) {
        if (e.nodes.length) {
            var node = nodes.get(e.nodes[0]);
            // Do something
            nodes.update(node);
        }
        });
        network.on("hoverNode", function(params) {
            $('#mynetwork').qtip({
                content: params.node.label,
                show: {
                    event: event.type // original event
                },
                position: {
                    my: 'top left',
                    target: 'mouse',
                    adjust: {
                    x: 10, y: 10
                    }
                }
            });
        });
    });    

    
    
  const pushToDataLayer = () => {
    window.dataLayer = window.dataLayer || [];  
    window.dataLayer.push({ event: 'gtm.timer'});
    setTimeout(() => {
      window.dataLayer.push({'merchantType': 'omnichannel', 'user_id': '10'});
    }, 2000);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }