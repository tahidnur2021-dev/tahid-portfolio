// Mobile Navigation Toggle
                const mobileBtn = document.getElementById('mobileMenuBtn');
                const mobileMenu = document.getElementById('mobileMenu');
                mobileBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
                // Close mobile drawer when clicking links
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
                // HTML5 Canvas Nanoscale Semiconductor Background Engine (Monochrome Gray/White)
                const canvas = document.getElementById('semiconductorCanvas');
                const ctx = canvas.getContext('2d');
                let width = canvas.width = window.innerWidth;
                let height = canvas.height = window.innerHeight;
                window.addEventListener('resize', () => {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    initNodes();
                });
                // Nodes setup for nanoscale grid simulation
                const nodeCount = Math.floor((width * height) / 22000);
                let nodes = [];
                let mouse = { x: null, y: null, radius: 150 };
                window.addEventListener('mousemove', (e) => {
                    mouse.x = e.clientX;
                    mouse.y = e.clientY;
                });
                window.addEventListener('mouseleave', () => {
                    mouse.x = null;
                    mouse.y = null;
                });
                class SemiconductorNode {
                    constructor() {
                        this.x = Math.random() * width;
                        this.y = Math.random() * height;
                        this.vx = (Math.random() - 0.5) * 0.6;
                        this.vy = (Math.random() - 0.5) * 0.6;
                        this.radius = Math.random() * 2 + 1;
                        // Lattice node type (0: bright white electron, 1: silver hole, 2: dark gray lattice point)
                        this.type = Math.floor(Math.random() * 3);
                    }
                    update() {
                        this.x += this.vx;
                        this.y += this.vy;
                        if (this.x < 0 || this.x > width) this.vx *= -1;
                        if (this.y < 0 || this.y > height) this.vy *= -1;
                        // Mouse interaction / laser drift effect
                        if (mouse.x && mouse.y) {
                            let dx = mouse.x - this.x;
                            let dy = mouse.y - this.y;
                            let dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < mouse.radius) {
                                let force = (mouse.radius - dist) / mouse.radius;
                                this.x -= (dx / dist) * force * 1.5;
                                this.y -= (dy / dist) * force * 1.5;
                            }
                        }
                    }
                    draw() {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                        if (this.type === 0) {
                            ctx.fillStyle = '#ffffff'; // Pure white
                        } else if (this.type === 1) {
                            ctx.fillStyle = '#a1a1aa'; // Silver gray
                        } else {
                            ctx.fillStyle = '#52525b'; // Charcoal gray
                        }
                        ctx.fill();
                    }
                }
                function initNodes() {
                    nodes = [];
                    for (let i = 0; i < nodeCount; i++) {
                        nodes.push(new SemiconductorNode());
                    }
                }
                function animateCanvas() {
                    ctx.clearRect(0, 0, width, height);
                    // Draw monochrome semiconductor grid connection lines
                    for (let a = 0; a < nodes.length; a++) {
                        for (let b = a + 1; b < nodes.length; b++) {
                            let dx = nodes[a].x - nodes[b].x;
                            let dy = nodes[a].y - nodes[b].y;
                            let dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 120) {
                                let opacity = (1 - dist / 120) * 0.15;
                                ctx.strokeStyle = nodes[a].type === 0 ? `rgba(255, 255, 255, ${opacity})` : `rgba(161, 161, 170, ${opacity})`;
                                ctx.lineWidth = 0.8;
                                ctx.beginPath();
                                ctx.moveTo(nodes[a].x, nodes[a].y);
                                ctx.lineTo(nodes[b].x, nodes[b].y);
                                ctx.stroke();
                            }
                        }
                    }
                    nodes.forEach(node => {
                        node.update();
                        node.draw();
                    });
                    requestAnimationFrame(animateCanvas);
                }
                window.onload = function() {
                    initNodes();
                    animateCanvas();
                };
                // Function to preview image uploaded from user's local disk
                function previewProfileImage(event) {
                    const reader = new FileReader();
                    reader.onload = function() {
                        const output = document.getElementById('profileImage');
                        output.src = reader.result;
                    };
                    if (event.target.files && event.target.files[0]) {
                        reader.readAsDataURL(event.target.files[0]);
                    }
                }
                // Function to prompt user for direct image web link
                function promptImageUrl() {
                    const url = prompt("Enter direct image web URL (e.g. https://example.com/photo.jpg):", "");
                    if (url && url.trim() !== "") {
                        document.getElementById('profileImage').src = url.trim();
                    }
                }

document.addEventListener("DOMContentLoaded", function () {
                    var specializations = [
                        "Avionics",
                        "VLSI",
                        "Semiconductor",
                        "Solar Cell "
                    ];
                    var currentIndex = 0;
                    var rotatingText = document.getElementById("rotatingSpecialization");
                    setInterval(function () {
                        rotatingText.style.opacity = "0";
                        rotatingText.style.transform = "translateY(-8px)";
                        setTimeout(function () {
                            currentIndex = (currentIndex + 1) % specializations.length;
                            rotatingText.textContent = specializations[currentIndex];
                            rotatingText.style.transform = "translateY(8px)";
                            setTimeout(function () {
                                rotatingText.style.opacity = "1";
                                rotatingText.style.transform = "translateY(0)";
                            }, 50);
                        }, 500);
                    }, 2500);
                });

document.addEventListener("DOMContentLoaded", function () {
                    var roles = [
                        "Avionics Engineer",
                        "Prospective PhD Researcher",
                        "Solar Cell Designer",
                        "Semiconductor Device Modeler",
                        "TCAD Simulation Researcher",
                        "Nanoscale Device Researcher",
                    ];
                    var roleIndex = 0;
                    var roleText = document.getElementById("heroRoleText");
                    if (!roleText) {
                        return;
                    }
                    setInterval(function () {
                        roleText.style.opacity = "0";
                        roleText.style.transform = "translateY(-10px)";
                        setTimeout(function () {
                            roleIndex = (roleIndex + 1) % roles.length;
                            roleText.textContent = roles[roleIndex];
                            roleText.style.transform = "translateY(10px)";
                            setTimeout(function () {
                                roleText.style.opacity = "1";
                                roleText.style.transform = "translateY(0)";
                            }, 50);
                        }, 500);
                    }, 2500);
                });
