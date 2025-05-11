
import { useParams, Link } from "react-router-dom";
import { Clock, CalendarDays, ArrowLeft, Share, Tag } from "lucide-react";
import { Newsletter } from "@/components/Newsletter";

// Blog post data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: 1,
    title: "The Origins of Halloween: Ancient Traditions to Modern Celebrations",
    excerpt: "Discover how Halloween evolved from the ancient Celtic festival of Samhain to today's costume parties and trick-or-treating traditions.",
    image: "https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 15, 2024",
    readTime: "5 min read",
    category: "History",
    slug: "origins-of-halloween",
    content: `
      <h2>The Ancient Roots of Halloween</h2>
      <p>Halloween's origins date back to the ancient Celtic festival of Samhain (pronounced sow-in). The Celts, who lived 2,000 years ago, mostly in the area that is now Ireland, the United Kingdom, and northern France, celebrated their new year on November 1.</p>
      
      <p>This day marked the end of summer and the harvest and the beginning of the dark, cold winter, a time of year that was often associated with human death. Celts believed that on the night before the new year, the boundary between the worlds of the living and the dead became blurred. On the night of October 31, they celebrated Samhain, when it was believed that the ghosts of the dead returned to earth.</p>
      
      <h2>The Transformation Through History</h2>
      <p>By the 9th century, the influence of Christianity had spread into Celtic lands, where it gradually blended with and supplanted older Celtic rites. The Church designated November 1 as All Saints' Day, a time to honor saints and martyrs. The celebration was also called All-hallows or All-hallowmas (from Middle English Alholowmesse meaning All Saints' Day).</p>
      
      <p>The night before it, the night of Samhain, began to be called All-Hallows Eve and, eventually, Halloween. Even as Christianity took hold, the old Celtic practices associated with Samhain never died out entirely. People continued to light bonfires, wear costumes to ward off ghosts, and practice divination.</p>
      
      <h2>Halloween Comes to America</h2>
      <p>As European immigrants came to America, they brought their varied Halloween customs with them. Because of the rigid Protestant belief systems of early New England, celebration of Halloween was extremely limited in colonial times.</p>
      
      <p>It was much more common in Maryland and the southern colonies. As the beliefs and customs of different European ethnic groups and the American Indians meshed, a distinctly American version of Halloween began to emerge. The first celebrations included "play parties," public events held to celebrate the harvest. Neighbors would share stories of the dead, tell each other's fortunes, dance, and sing.</p>
      
      <h2>The Evolution of Trick-or-Treating</h2>
      <p>By the late 1800s, there was a move in America to mold Halloween into a holiday more about community and neighborly get-togethers than about ghosts, pranks, and witchcraft. At the turn of the century, Halloween parties for both children and adults became the most common way to celebrate the day.</p>
      
      <p>The tradition of "trick-or-treating" is thought to have originated not with the Celts or early Europeans, but with a ninth-century European custom called souling. On November 2, All Souls Day, early Christians would walk from village to village begging for "soul cakes," made out of square pieces of bread with currants.</p>
      
      <p>The more soul cakes the beggars would receive, the more prayers they would promise to say on behalf of the dead relatives of the donors. At the time, it was believed that the dead remained in limbo for a time after death, and that prayer, even by strangers, could expedite a soul's passage to heaven.</p>
      
      <h2>Halloween Today</h2>
      <p>Today, Americans spend an estimated $6 billion annually on Halloween, making it the country's second-largest commercial holiday after Christmas. Halloween has evolved into a secular, family-friendly event where children and adults alike can let their imaginations run wild.</p>
      
      <p>From the ancient Celtic festival of Samhain to today's candy-filled celebration, Halloween continues to captivate and thrill people of all ages. While the essence of the holiday has changed over time, its spirit of mystery, fun, and community remains intact, ensuring that Halloween will continue to be a beloved tradition for generations to come.</p>
    `,
  },
  {
    id: 2,
    title: "DIY Halloween Decorations That Will Spook Your Neighbors",
    excerpt: "Learn how to create spine-chilling decorations for your home using common household items and a touch of creativity.",
    image: "https://images.unsplash.com/photo-1633284851606-0c27c33a7dcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 18, 2024",
    readTime: "7 min read",
    category: "DIY",
    slug: "diy-halloween-decorations",
    content: `
      <h2>Creating a Haunted Atmosphere on a Budget</h2>
      <p>Halloween is the perfect time to let your creativity shine while transforming your home into a hauntingly beautiful or delightfully creepy space. The best part? You don't need to break the bank to create an impressive Halloween display. With a few common household items and a touch of imagination, you can craft decorations that will have your neighbors doing double-takes.</p>
      
      <h2>Ghostly Window Silhouettes</h2>
      <p>One of the simplest yet most effective Halloween decorations is window silhouettes. All you need is black construction paper, scissors, and tape. Start by drawing ghostly figures, creepy creatures, or spooky scenes on the paper, then cut them out and tape them to your windows. When backlit at night, these silhouettes create an eerie effect that's visible from the street.</p>
      
      <p>For added impact, use a blue or purple light bulb behind the silhouettes to create a ghostly glow. This simple project can transform the entire look of your home from the outside.</p>
      
      <h2>Trash Bag Spiders and Webs</h2>
      <p>Large spiders make for spine-chilling Halloween decorations, and they're surprisingly easy to make using black trash bags. Fill one bag with crumpled newspaper for the body, and use strips from another bag to create eight legs. Secure everything with twist ties or black duct tape.</p>
      
      <p>Complement your trash bag spiders with DIY spider webs made from simple white yarn or string. Create anchor points around your porch or trees, then weave the yarn between these points in a web pattern. Spray your completed web with hairspray and dust with a bit of flour for an aged, authentic look.</p>
      
      <h2>Milk Jug Ghosts</h2>
      <p>This is a perfect project to reuse plastic milk jugs. Rinse them thoroughly, then draw ghostly faces on them using a black permanent marker. Cut a small hole in the back of each jug, large enough to insert a string of white Christmas lights.</p>
      
      <p>Line your walkway with these illuminated ghosts for a warm, spooky welcome to trick-or-treaters. The soft glow they emit creates a magical atmosphere that's festive rather than frightening—perfect for homes with young visitors.</p>
      
      <h2>Haunted Terrariums</h2>
      <p>Transform clear glass jars or old aquariums into miniature haunted scenes. Start with a base layer of soil or sand, then add small Halloween figurines, miniature tombstones (made from cardboard or air-dry clay), tiny plastic skeletons, and moss or dried plants.</p>
      
      <p>For a creepy fog effect, place a small amount of dry ice in a separate, smaller container within your terrarium just before displaying it (adult supervision required). The fog will cascade over your miniature haunted scene, creating an unforgettable centerpiece.</p>
      
      <h2>Floating Witch Hats</h2>
      <p>Create the illusion of a witches' gathering with this magical floating hat display. You'll need black witch hats (available inexpensively at most Halloween stores), fishing line, and hooks that can be attached to your ceiling.</p>
      
      <p>Hang the hats at varying heights from your ceiling to create the impression that invisible witches are floating through your home. Add battery-operated string lights among the hats for an enchanting glow, or place electric candles beneath them for dramatic shadows.</p>
      
      <h2>Mummified Door</h2>
      <p>Transform your front door into a mummy with nothing more than white streamers or toilet paper and large googly eyes. Simply wrap the streamers horizontally across your door, leaving a space for eye placement. The overlapping layers create a textured, wrapped appearance.</p>
      
      <p>Attach two large googly eyes (made from paper plates painted with black circles or purchased from a craft store) in the space you left unwrapped. This eye-catching decoration welcomes visitors with a touch of whimsy rather than fright.</p>
      
      <h2>The Final Touch: Ambiance</h2>
      <p>Complete your DIY Halloween décor with the right ambiance. Consider these finishing touches:</p>
      <ul>
        <li>A soundtrack of spooky sounds played through a hidden speaker</li>
        <li>Strategically placed flashlights with colored cellophane to create dramatic lighting</li>
        <li>Scented candles with fall fragrances like pumpkin, apple cider, or cinnamon</li>
      </ul>
      
      <p>With these simple DIY decorations, you'll create a memorable Halloween atmosphere that delights visitors and establishes your home as one of the most festively spooky on the block—without the frightening price tag of store-bought decorations. Happy crafting!</p>
    `,
  },
  {
    id: 3,
    title: "Haunted Houses Around the World: Real Stories of Paranormal Activity",
    excerpt: "Explore the most notoriously haunted locations across the globe and the chilling stories behind their ghostly inhabitants.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 22, 2024",
    readTime: "8 min read",
    category: "Paranormal",
    slug: "haunted-houses-around-the-world",
    content: `
      <h2>When History Refuses to Rest</h2>
      <p>Throughout the world, certain locations seem to capture the imagination and send chills down the spine. These haunted houses and historic sites are more than just tourist attractions – they're places where many believe the veil between our world and whatever lies beyond has worn thin. Here, we explore some of the most notorious haunted locations around the globe and the stories that have made them infamous.</p>
      
      <h2>The Ancient Ram Inn (Gloucestershire, England)</h2>
      <p>Built in 1145, the Ancient Ram Inn is considered by many paranormal investigators to be one of the most haunted buildings in Great Britain. Originally constructed on a pagan burial ground, this former pub and inn has a dark history including reports of child sacrifices, devil worship, and ritual murders.</p>
      
      <p>Visitors and past owners report being physically attacked by invisible forces, experiencing sudden drops in temperature, and witnessing full-bodied apparitions. The most active spirit is believed to be that of a witch who was burned at the stake on the property and now haunts a room known as "The Witch's Room."</p>
      
      <h2>Hoia-Baciu Forest (Cluj-Napoca, Romania)</h2>
      <p>While not a house, the Hoia-Baciu Forest deserves mention as one of the world's most haunted locations. Known as Romania's "Bermuda Triangle," this forest has gained international notoriety for inexplicable phenomena including mysterious disappearances, unexplained electronic malfunctions, and reports of physical symptoms like rashes, nausea, and headaches affecting visitors.</p>
      
      <p>The most disturbing stories involve people who have allegedly disappeared in the forest, only to emerge years later with no memory of where they had been – and without having aged. Photographs taken within the forest often capture unexplained faces and figures among the strangely shaped trees, many of which grow in bizarrely twisted formations.</p>
      
      <h2>Castle of Good Hope (Cape Town, South Africa)</h2>
      <p>Built in the 17th century by Dutch colonists, the Castle of Good Hope is South Africa's oldest colonial building – and reportedly its most haunted. Security guards regularly report seeing the ghost of a tall gentleman jumping off the castle walls, as well as the spectre of Lady Anne Barnard, who lived there in the late 1700s.</p>
      
      <p>Perhaps most disturbing is the bell tower, which occasionally rings by itself despite the bell having been sealed off for centuries. Legend states that a soldier hung himself with the bell rope, and his spirit continues to make his presence known. Visitors also report hearing voices and footsteps in the windowless dungeon, where prisoners were tortured and left to die.</p>
      
      <h2>Bhangarh Fort (Rajasthan, India)</h2>
      <p>So notorious is the haunting of Bhangarh Fort that the Archaeological Survey of India has forbidden anyone from remaining inside the ruins after sunset or before sunrise. A sign at the entrance explicitly warns visitors of the supernatural danger.</p>
      
      <p>According to legend, a tantric priest who was skilled in black magic fell in love with the local princess. When his advances were rejected, he cast a spell on the palace, dooming all who lived there to death without rebirth. Shortly after, a war brought about the deaths of most inhabitants, including the princess. Visitors report hearing screams, ghostly music, and strange shadows, while some claim to have been slapped or followed by invisible entities.</p>
      
      <h2>Monte Cristo Homestead (Junee, Australia)</h2>
      <p>Widely regarded as Australia's most haunted house, the Monte Cristo Homestead has a history saturated with tragedy. Built in 1885, the Victorian mansion has witnessed numerous untimely deaths, including a young child who was dropped down the stairs, a maid who fell from the balcony, and a stable boy who burned to death.</p>
      
      <p>The most active spirit is believed to be that of the original owner's wife, Elizabeth Crawley, who rarely left the house during her life and seems determined to maintain her presence after death. Visitors report seeing her spectral figure in windows, feeling invisible hands touching them, and experiencing intense feelings of dread in certain rooms.</p>
      
      <h2>Island of the Dolls (Xochimilco, Mexico)</h2>
      <p>Perhaps the most visually disturbing location on our list is the Island of the Dolls (Isla de las Muñecas) near Mexico City. After finding the body of a drowned girl, the island's caretaker, Don Julian Santana, began collecting dolls and hanging them throughout the island as a way to please her spirit.</p>
      
      <p>For over fifty years, he continued this practice, creating an increasingly eerie landscape of weathered, dismembered dolls hanging from trees and buildings. Visitors claim the dolls whisper to each other, move their limbs, or open their eyes. In a tragic twist, Don Julian was found drowned in 2001 in the same spot where he had discovered the girl's body decades earlier.</p>
      
      <h2>The Science Behind the Supernatural</h2>
      <p>While believers in the paranormal maintain these phenomena are evidence of spirits, skeptics point to scientific explanations such as infrasound (sound waves below human hearing that can cause feelings of dread), electromagnetic field fluctuations that affect brain activity, and the power of suggestion combined with our natural pattern-seeking behavior.</p>
      
      <p>Whatever your belief, these locations have become powerful cultural touchstones, drawing tens of thousands of visitors annually who hope to experience something beyond the ordinary. Whether their hauntings are the result of restless spirits or simply the power of a good story well-told, these places continue to fascinate and frighten us, connecting us to our ancient fear—and fascination—with what might await beyond death.</p>
    `,
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug);
  
  // If no matching post is found
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-creepster text-3xl mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't seem to exist.</p>
          <Link to="/blog" className="text-halloween-purple hover:underline flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to All Blog Posts
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto -mt-20 relative z-10">
          <div className="bg-card shadow-lg rounded-lg p-6 md:p-10 border border-halloween-purple/20">
            <Link to="/blog" className="text-halloween-purple hover:text-halloween-purple-dark transition-colors flex items-center text-sm mb-6">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to All Blog Posts
            </Link>
            
            <h1 className="font-creepster text-3xl md:text-4xl mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8">
              <span className="flex items-center mr-4 mb-2">
                <CalendarDays className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </span>
              <span className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
            </div>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-border pt-6 mt-10">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <span className="block text-sm text-muted-foreground mb-2">Share this article:</span>
                  <div className="flex space-x-3">
                    <button className="text-muted-foreground hover:text-halloween-purple transition-colors">
                      <Share className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </button>
                    {/* Add more share buttons as needed */}
                  </div>
                </div>
                
                <Link 
                  to="/blog"
                  className="mt-4 sm:mt-0 inline-flex items-center bg-halloween-purple hover:bg-halloween-purple-dark text-white px-4 py-2 rounded-md transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <Newsletter />
      </div>
    </div>
  );
};

export default BlogPostPage;
