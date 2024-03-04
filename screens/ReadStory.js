// ReadStory.js

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ReadStory = ({ route }) => {
  const { StoryId } = route.params; // Get the storyId from the navigation route

  // Replace this with the actual content or fetch it from your data source
  const StoryData = [{
    id: 1,
    title: `Daniel in the Lion's den`,
    intro: 'Introduction to the Story',
    content: `Once upon a time in the ancient kingdom of Babylon, there lived a wise and faithful man named Daniel. He was known for his integrity, wisdom, and devotion to God. King Darius recognized Daniel's exceptional qualities and appointed him as one of the top administrators in the kingdom.

    Jealous of Daniel's rising influence, some officials conspired to bring him down. They persuaded King Darius to sign a decree forbidding anyone from praying to any god or man except the king for thirty days. Violating this decree would result in being thrown into a den of hungry lions.
    
    Despite the decree, Daniel continued his daily practice of praying to God with the windows open. The conspirators caught him in the act and reported to the king. Realizing the trap he had fallen into, King Darius was distressed but had no choice but to enforce his own decree.
    
    With great sorrow, King Darius ordered Daniel to be thrown into the den of lions. Before being lowered into the pit, Daniel declared his innocence and trust in God. The king, hoping against hope, sealed the den with a stone and spent a sleepless night in anxiety.
    
    At dawn, King Darius rushed to the lion's den, fearing the worst. To his amazement and joy, he found Daniel unharmed. God had sent an angel to shut the mouths of the hungry lions, sparing Daniel's life. Overwhelmed with gratitude and awe, King Darius praised the God of Daniel and issued a new decree, commanding all people in his kingdom to fear and reverence Daniel's God.
    
    Daniel's faithfulness and unwavering trust in God had not only saved him from the lion's den but also brought glory to God in the eyes of the king and the entire kingdom.`,
    imageUrl: require('../Assets/007.jpg'),

  },
  {
    id: 2,
    title: 'The Prodigal Son',
    intro: 'A Story of Redemption and Unconditional Love',
    content: `Once, in a distant land, a wealthy man had two sons. The younger son, restless and eager for independence, approached his father, asking for his share of the inheritance. Despite the unconventional request, the father divided his property between his two sons.

    The younger son, now free from the constraints of home, embarked on a journey to a faraway country. There, he squandered his wealth in extravagant living, indulging in wild and reckless behavior. Soon, a severe famine struck the land, and the young man found himself destitute and hungry.
    
    In desperation, he took a job feeding pigs—a task that was both lowly and degrading. Starving and humiliated, the prodigal son finally came to his senses. He realized the abundance and generosity he had forsaken in his pursuit of pleasure. With a repentant heart, he decided to return to his father, even if only as a servant.
    
    As the wayward son approached his father's estate, he was met with an unexpected sight. The father, who had been watching and waiting, saw his lost son from a distance. Filled with compassion and love, he ran to embrace him. Overwhelmed with remorse, the prodigal son confessed his wrongdoing and pleaded for forgiveness.
    
    Instead of condemnation, the father celebrated the return of his lost son. He ordered a feast, symbolizing joy and reconciliation. The elder son, who had remained faithful and dutiful, was initially resentful at the extravagant welcome given to his wayward brother. Yet, the father, in his wisdom, reminded the elder son of the importance of forgiveness and compassion.
    
    The parable of the Prodigal Son illustrates the boundless mercy of God and the transformative power of repentance. It serves as a poignant reminder that, no matter how far we stray, the love of a compassionate Father awaits our return with open arms.`,
    imageUrl: require('../Assets/004.jpg'),
  },
  {
    id: 3,
    title: `Joseph and the coat of many colours`,
    intro: 'A Journey from Betrayal to Redemption',
    content: `In the land of Canaan, a young man named Joseph was favored by his father, Jacob. To show his love, Jacob gave Joseph a beautiful coat of many colors, symbolizing his special status among his brothers. However, this act of favoritism fueled jealousy among Joseph's siblings.

    Joseph began to have dreams that seemed to foretell his future greatness. These dreams only intensified his brothers' resentment. In a fit of jealousy and spite, they plotted against him. One day, they seized Joseph and threw him into a pit, later selling him as a slave to passing traders.
    
    Joseph found himself in Egypt, far from his family and the comfort of his father's house. Yet, even in slavery, he displayed remarkable qualities. His integrity and reliance on God caught the attention of his master, Potiphar, who entrusted him with great responsibilities.
    
    However, Joseph faced another trial when Potiphar's wife falsely accused him of wrongdoing. Despite his innocence, Joseph was thrown into prison. Even in this dire situation, he remained steadfast in his faith.
    
    Joseph's ability to interpret dreams soon reached the ears of Pharaoh, the ruler of Egypt. Summoned to interpret Pharaoh's troubling dreams, Joseph foretold a severe famine. Impressed by his wisdom, Pharaoh appointed Joseph as second in command, giving him the authority to manage the resources of Egypt.
    
    As predicted, a famine struck the land, affecting not only Egypt but also Joseph's homeland. Joseph's brothers, desperate for food, came to Egypt seeking help. Unbeknownst to them, the high-ranking official they sought assistance from was their long-lost brother.
    
    In a moment of revelation and reconciliation, Joseph forgave his brothers, recognizing that God had orchestrated events for a greater purpose. The family was reunited, and Joseph's journey from betrayal to redemption became a testament to the power of forgiveness and God's sovereign plan.`,

    imageUrl: require('../Assets/005.jpg'),
  },
  {
    id: 4,
    title: 'Blind Bartimaeus',
    intro: 'A Story of Faith and Healing',
    content: `In the bustling streets of Jericho, a blind beggar named Bartimaeus sat by the roadside. Unable to see, he relied on the sounds and voices around him to navigate his world. One day, he heard that Jesus of Nazareth was passing by.

    Bartimaeus, seizing the opportunity, began to cry out, "Jesus, Son of David, have mercy on me!" The crowd tried to silence him, but Bartimaeus persisted even more fervently. His desperate plea caught the attention of Jesus.
    
    Jesus, moved by the blind man's faith, called him forward. Bartimaeus, casting aside his cloak, sprang to his feet and approached Jesus. With compassion, Jesus asked him, "What do you want me to do for you?" Bartimaeus replied, "Rabbi, I want to see."
    
    Jesus, recognizing Bartimaeus' faith, declared, "Go, your faith has healed you." Instantly, Bartimaeus regained his sight. Overwhelmed with gratitude, he followed Jesus on the way.
    
    This story of Blind Bartimaeus is a powerful testament to the transformative power of faith and the compassion of Jesus. It teaches us the importance of persistence in seeking God's mercy and the incredible outcomes that result from trusting in His healing touch.`,
    
    imageUrl: require('../Assets/011.jpg'),

  }

];


const selectedStory = StoryData.find((Story) => Story.id === StoryId);

    if(!selectedStory) {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.notFound}>Story not found</Text>
            </ScrollView>
        )
    }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.backgroundImage} source={selectedStory.imageUrl} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{selectedStory.title}</Text>
        <Text style={styles.intro}>{selectedStory.intro}</Text>
        <Text style={styles.content}>{selectedStory.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // opacity: 0.5,
  },
  contentContainer: {
    padding: 20,
    marginTop: 120, // Adjust the marginTop as needed
    // backgroundColor: '#1f1f1f', 
    backgroundColor: '#d6d6d6', 
    borderRadius: 10,
    opacity: 0.8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // color: '#fff',
    color: '#1f1f1f',
  },
  intro: {
    fontSize: 16,
    marginBottom: 15,
    // color: '#fff',
    color: '#1f1f1f',
},
content: {
    fontSize: 18,
    lineHeight: 24,
    // color: '#fff',
    color: '#1f1f1f',
  },

  notFound: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
});

export default ReadStory;
