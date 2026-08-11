/* =====================================================================
   Early Support Developmental Journal for babies and children with
   Down syndrome  —  content data
   ---------------------------------------------------------------------
   Source: Early Support / Down Syndrome Educational Trust, Crown
   copyright 2006 (ref ES49). Extracts reproduced for non-commercial
   personal use with source acknowledged, per the notice in the original.

   This file holds the PUBLISHED JOURNAL ITEMS ONLY. It contains no
   information about any child. A child's progress lives in Supabase and
   references these items by `id`.

   IDs ARE PERMANENT. Once an id has been used to record progress it must
   never be renumbered or reused, or history will attach to the wrong
   skill. To correct wording, edit `text` and leave `id` alone. To remove
   an item, mark it retired rather than deleting the line.

   LEVELS (exactly as the journal defines them)
     emerging   - behaviour seen for the first time, even just an attempt
     developing - behaviour occurs sometimes, becoming more skilful
     achieved   - occurs often/usually, independently and confidently
                  across different situations, toys and people
   Parents need not use all three columns for every item.

   PROFILE RULE: when 'achieved' is ticked for MORE THAN HALF the items
   in a subdomain within a Step, that cell of the Developmental Profile
   is dated. This is a milestone marker only - it is NOT a gate. Every
   item in every Step is always available to answer. The journal is
   explicit that children develop across several Steps at once and that
   you should look backwards and forwards.

   STATUS OF THIS FILE
     Steps 1-11  complete, verbatim, transcribed directly from the
     source PDF (243 pages) via pdftotext -layout, cross-checked against
     each Step's own summary sheet. 381 items total.
   ===================================================================== */

export const LEVELS = [
  { id: 'emerging',   label: 'Emerging',   hint: 'Seen for the first time' },
  { id: 'developing', label: 'Developing', hint: 'Happens sometimes' },
  { id: 'achieved',   label: 'Achieved',   hint: 'Happens often/usually, confidently' }
];

/* Retrospective state for parents who kept the journal on paper before
   starting the app. Recorded distinctly so the record stays honest about
   what was directly observed vs reported later. */
export const BACKFILL = {
  id: 'achieved_before',
  label: 'Achieved before journal started',
  hint: 'Mirrors the "Before Nov 2005" convention in the printed journal'
};

/* The five areas of development, and the subdomain rows of the
   Developmental Profile grid, in the order the printed profile uses.
   Note two deliberate oddities taken from the printed profile:
     - "Engagement and interaction with others" (Steps 1-2 only) is
       grouped under Communication.
     - "Sensory-motor development and play" (Steps 1-2 only) is grouped
       under Cognition and play.
   `split: ['sign','spoken']` marks Expression, which the journal records
   separately for signing and speaking - important for Down syndrome. */
export const AREAS = [
  {
    id: 'communication', name: 'Communication',
    subdomains: [
      { id: 'engagement',  name: 'Engagement and interaction with others', earlyOnly: true },
      { id: 'foundations', name: 'Foundations of communication' },
      { id: 'attention',   name: 'Attention and listening' },
      { id: 'understanding', name: 'Understanding' },
      { id: 'expression',  name: 'Expression', split: ['sign', 'spoken'] }, /* per-item split:true flags which rows actually carry separate Sign/Spoken columns in the source - this starts at Step 6, not Step 1 */
      { id: 'speech',      name: 'Speech production' }
    ]
  },
  {
    id: 'social', name: 'Social-emotional',
    subdomains: [
      { id: 'se_understanding', name: 'Social-emotional understanding and expression' },
      { id: 'attachment',       name: 'Attachment' }
    ]
  },
  {
    id: 'cognition', name: 'Cognition and play',
    subdomains: [
      { id: 'sensorymotor', name: 'Sensory-motor development and play', earlyOnly: true },
      { id: 'cognition',    name: 'Cognition' },
      { id: 'play',         name: 'Play' }
    ]
  },
  {
    id: 'motor', name: 'Motor and sensory',
    subdomains: [
      { id: 'large', name: 'Large movements' },
      { id: 'fine',  name: 'Fine movements and hand-eye co-ordination' },
      { id: 'vision', name: 'Vision' }
    ]
  },
  {
    id: 'selfhelp', name: 'Self-help',
    subdomains: [
      { id: 'feeding',      name: 'Feeding' },
      { id: 'sleeping',     name: 'Sleeping' },
      { id: 'washing',      name: 'Washing' },
      { id: 'toileting',    name: 'Toileting' },
      { id: 'dressing',     name: 'Dressing' },
      { id: 'independence', name: 'Independence skills' }
    ]
  }
];

/* Approximate age for TYPICALLY developing children. The journal is
   emphatic that this is a rough guide only and must not be used to
   predict what a child with Down syndrome will achieve. Display with
   that caveat or not at all. */
export const STEP_AGES = {
  1: '0-3 months',   2: '2-5 months',   3: '4-7 months',  4: '6-10 months',
  5: '9-13 months',  6: '12-16 months', 7: '15-19 months', 8: '18-22 months',
  9: '21-25 months', 10: '24-31 months', 11: '30-36 months'
};

/* --------------------------------------------------------------------
   ITEMS
   id format: s<step>.<subdomain>.<nn>
   -------------------------------------------------------------------- */

export const ITEMS = [

  /* ============================ STEP 1 ============================ */

  { id: 's1.engagement.01', step: 1, sub: 'engagement', text: 'Cries to express needs (e.g. when hungry, angry or in pain)' },
  { id: 's1.engagement.02', step: 1, sub: 'engagement', text: 'Shows a reaction to sound by behaviour or actions (e.g. startle response to loud noises, eyes widen, limbs move or slow, facial twitch, cry, change in sucking patterns during feeding, stirs from sleep, change in breathing pattern)', summary: true },
  { id: 's1.engagement.03', step: 1, sub: 'engagement', text: 'Responds to calming input (e.g. patting, rocking, wrapping, cuddling)', summary: true },
  { id: 's1.engagement.04', step: 1, sub: 'engagement', text: 'Stops crying when picked up' },
  { id: 's1.engagement.05', step: 1, sub: 'engagement', text: 'Looks intently at faces nearby' },
  { id: 's1.engagement.06', step: 1, sub: 'engagement', text: 'Attention is attracted and held when you use lively facial expressions, or use child-directed speech (voice with varied tone and volume)', summary: true },
  { id: 's1.engagement.07', step: 1, sub: 'engagement', text: 'Makes sounds such as gurgles and coos', summary: true },
  { id: 's1.engagement.08', step: 1, sub: 'engagement', text: 'Holds eye contact with you for 5 seconds or more' },
  { id: 's1.engagement.09', step: 1, sub: 'engagement', text: 'Copies facial expressions and mouth shapes (e.g. sticking out tongue, opening mouth, widening eyes)', summary: true },
  { id: 's1.engagement.10', step: 1, sub: 'engagement', text: 'Smiles in response to touch or sound' },
  { id: 's1.engagement.11', step: 1, sub: 'engagement', text: 'Smiles or quietens to familiar voice/face' },
  { id: 's1.engagement.12', step: 1, sub: 'engagement', text: 'Smiles at interesting objects' },
  { id: 's1.engagement.13', step: 1, sub: 'engagement', text: 'Sucks on hands, clothes, and/or pacifier to calm self' },

  { id: 's1.sensorymotor.01', step: 1, sub: 'sensorymotor', text: 'Looks at pictures and moving objects for more than 5 seconds' },
  { id: 's1.sensorymotor.02', step: 1, sub: 'sensorymotor', text: 'Interested in new experiences (e.g. shows renewed interest if you present a different toy)', summary: true },
  { id: 's1.sensorymotor.03', step: 1, sub: 'sensorymotor', text: "Responds to touch 'games' (e.g. stroking tummy/feet, tickling, kissing, blowing on tummy etc.) by stilling, smiling, gazing or waving arms and legs etc.", summary: true },
  { id: 's1.sensorymotor.04', step: 1, sub: 'sensorymotor', text: 'Responds positively when face is stroked (e.g. relaxes, smiles, goes to sleep)' },
  { id: 's1.sensorymotor.05', step: 1, sub: 'sensorymotor', text: 'Can lift head when lying on tummy and move it from side to side', summary: true },
  { id: 's1.sensorymotor.06', step: 1, sub: 'sensorymotor', text: 'Turns head to the side when placed on tummy' },
  { id: 's1.sensorymotor.07', step: 1, sub: 'sensorymotor', text: 'Moves arms and legs - arms more than legs' },
  { id: 's1.sensorymotor.08', step: 1, sub: 'sensorymotor', text: 'Presses down feet/straightens body when held standing on a hard surface' },
  { id: 's1.sensorymotor.09', step: 1, sub: 'sensorymotor', text: 'Closes hand firmly around objects placed in palm', summary: true },
  { id: 's1.sensorymotor.10', step: 1, sub: 'sensorymotor', text: 'Keeps hands closed with thumbs tucked in against palm most of the time' },
  { id: 's1.sensorymotor.11', step: 1, sub: 'sensorymotor', text: 'Turns head/eyes towards diffuse light or interesting objects' },
  { id: 's1.sensorymotor.12', step: 1, sub: 'sensorymotor', text: 'Closes eyes to bright light' },
  { id: 's1.sensorymotor.13', step: 1, sub: 'sensorymotor', text: 'Can move eyes to look at different parts of objects and pictures' },
  { id: 's1.sensorymotor.14', step: 1, sub: 'sensorymotor', text: 'When lying on back or propped up, moves eyes to follow face/object moving slowly from side to side close to face', summary: true },

  { id: 's1.feeding.01', step: 1, sub: 'feeding', text: 'Opens mouth for breast or bottle when corner of mouth is touched (reflex rooting response)', summary: true },
  { id: 's1.feeding.02', step: 1, sub: 'feeding', text: 'Sucking is strong and rhythmic with co-ordinated swallow', summary: true },
  { id: 's1.feeding.03', step: 1, sub: 'feeding', text: 'Closes mouth around nipple or teat to achieve seal', summary: true },

  { id: 's1.sleeping.01', step: 1, sub: 'sleeping', text: 'Has a predictable sleeping pattern', summary: true },
  { id: 's1.sleeping.02', step: 1, sub: 'sleeping', text: 'Sleeps for periods of two hours or more', summary: true },

  /* ============================ STEP 2 ============================ */

  { id: 's2.engagement.01', step: 2, sub: 'engagement', text: "Watches speaker's faces carefully (up to 30 cm away)", summary: true },
  { id: 's2.engagement.02', step: 2, sub: 'engagement', text: "Recognises and is most responsive to parent/carer's voice (e.g. may become more vocal, active or make more eye contact)" },
  { id: 's2.engagement.03', step: 2, sub: 'engagement', text: 'Turns eyes and/or head towards voice/sound' },
  { id: 's2.engagement.04', step: 2, sub: 'engagement', text: 'Maintains eye contact during interactions with a familiar person' },
  { id: 's2.engagement.05', step: 2, sub: 'engagement', text: 'Responds when talked to (e.g. moves arms and legs, changes facial expression, moves body, makes mouth movements)', summary: true },
  { id: 's2.engagement.06', step: 2, sub: 'engagement', text: 'Smiles or makes sound in response to eye contact', summary: true },
  { id: 's2.engagement.07', step: 2, sub: 'engagement', text: 'Uses different sounds/cries to show hunger, tiredness and pain' },
  { id: 's2.engagement.08', step: 2, sub: 'engagement', text: 'Produces and copies non-speech sounds (e.g. coos, raspberries, effort grunts, shrieks, squeals)', summary: true },
  { id: 's2.engagement.09', step: 2, sub: 'engagement', text: 'Makes own sounds when talked to - especially to parent or carer and when a smiling face is used' },
  { id: 's2.engagement.10', step: 2, sub: 'engagement', text: 'Gurgles to get attention' },
  { id: 's2.engagement.11', step: 2, sub: 'engagement', text: "Shows emotional responses to other people's emotions (e.g. smiles when smiled at, becomes distressed if hears another child crying)" },
  { id: 's2.engagement.12', step: 2, sub: 'engagement', text: "Gazes a long time at parent's face - especially when feeding" },
  { id: 's2.engagement.13', step: 2, sub: 'engagement', text: 'Smiles at non-moving object or picture' },
  { id: 's2.engagement.14', step: 2, sub: 'engagement', text: 'Smiles at another person' },
  { id: 's2.engagement.15', step: 2, sub: 'engagement', text: 'Smiles more often to familiar rather than unfamiliar people' },
  { id: 's2.engagement.16', step: 2, sub: 'engagement', text: 'Shows anger if physically restrained (e.g. cries when held still for injection or medication)' },
  { id: 's2.engagement.17', step: 2, sub: 'engagement', text: 'Laughs to express pleasure' },
  { id: 's2.engagement.18', step: 2, sub: 'engagement', text: 'Becomes excited in anticipation of play/interaction (e.g. waves arms and legs, vocalises)', summary: true },
  { id: 's2.engagement.19', step: 2, sub: 'engagement', text: "Shows pleasure at 'peek-a-boo' games (e.g. smiles, waves arms, eyes brighten)" },
  { id: 's2.engagement.20', step: 2, sub: 'engagement', text: 'Shows pleasure at return of parent/carer' },
  { id: 's2.engagement.21', step: 2, sub: 'engagement', text: 'Shows distress at being left alone' },
  { id: 's2.engagement.22', step: 2, sub: 'engagement', text: "Likes cuddles and being held (calms, snuggles in, smiles, gazes at carer's face, strokes carer's skin)" },

  { id: 's2.sensorymotor.01', step: 2, sub: 'sensorymotor', text: 'Brings objects to mouth to explore them', summary: true },
  { id: 's2.sensorymotor.02', step: 2, sub: 'sensorymotor', text: 'Repeats actions that have an effect (e.g. kicking or batting mobile to create movement, banging side of cot to make noise etc.)', summary: true },
  { id: 's2.sensorymotor.03', step: 2, sub: 'sensorymotor', text: 'Likes listening to music, rattles and other sound-making toys' },
  { id: 's2.sensorymotor.04', step: 2, sub: 'sensorymotor', text: 'Shows anticipation and enjoyment of familiar caring routines (e.g. sucks or licks lips in response to sounds of preparation for feeding, waves arms or vocalises in excitement when undressed for bath)' },
  { id: 's2.sensorymotor.05', step: 2, sub: 'sensorymotor', text: 'Reacts with abrupt behaviour change when a face or object disappears suddenly from view' },
  { id: 's2.sensorymotor.06', step: 2, sub: 'sensorymotor', text: "Looks from one object to another and back again. Objects may be moving or still - this is termed 'shifting visual attention'", summary: true },
  { id: 's2.sensorymotor.07', step: 2, sub: 'sensorymotor', text: 'Reacts to familiar sounds or sights by changes in behaviour (e.g. extends arms/legs, smiles, searches with eyes when hears the vacuum cleaner, running bath, footsteps etc.)' },
  { id: 's2.sensorymotor.08', step: 2, sub: 'sensorymotor', text: 'Attempts to imitate face or arm movements' },
  { id: 's2.sensorymotor.09', step: 2, sub: 'sensorymotor', text: 'Looks toward an object or person that moves nearby' },
  { id: 's2.sensorymotor.10', step: 2, sub: 'sensorymotor', text: 'Moves arms and legs and chuckles when played with' },
  { id: 's2.sensorymotor.11', step: 2, sub: 'sensorymotor', text: 'When lying on tummy, lifts head up in the middle and uses forearms to support', summary: true },
  { id: 's2.sensorymotor.12', step: 2, sub: 'sensorymotor', text: 'Holds head in the middle (not to one side or the other) when lying on back' },
  { id: 's2.sensorymotor.13', step: 2, sub: 'sensorymotor', text: 'Able to control head when supported in an upright position (i.e. head does not flop forwards or backwards)' },
  { id: 's2.sensorymotor.14', step: 2, sub: 'sensorymotor', text: 'Moves head to look around when lying on back or supported in sitting' },
  { id: 's2.sensorymotor.15', step: 2, sub: 'sensorymotor', text: 'Arm and leg movements are smoother and more continuous - no longer so sudden and jerky' },
  { id: 's2.sensorymotor.16', step: 2, sub: 'sensorymotor', text: 'Makes crawling movements with arms and legs when lying on tummy' },
  { id: 's2.sensorymotor.17', step: 2, sub: 'sensorymotor', text: 'Kicks legs vigorously - one leg then the other' },
  { id: 's2.sensorymotor.18', step: 2, sub: 'sensorymotor', text: 'Starts to reach out to toys or objects (this is not yet accurate)', summary: true },
  { id: 's2.sensorymotor.19', step: 2, sub: 'sensorymotor', text: 'Brings hands to mouth when lying on side or tummy' },
  { id: 's2.sensorymotor.20', step: 2, sub: 'sensorymotor', text: 'Rolls from side to back' },
  { id: 's2.sensorymotor.21', step: 2, sub: 'sensorymotor', text: 'Holds head and upper body up by him/herself when supported in sitting' },
  { id: 's2.sensorymotor.22', step: 2, sub: 'sensorymotor', text: 'Holds rattle for a couple of seconds when placed in palm of hand' },
  { id: 's2.sensorymotor.23', step: 2, sub: 'sensorymotor', text: 'Explores hands and fingers (e.g. watches them, presses hands together, clasps and unclasps hands)' },
  { id: 's2.sensorymotor.24', step: 2, sub: 'sensorymotor', text: 'Hands are open most of the time when not holding objects' },
  { id: 's2.sensorymotor.25', step: 2, sub: 'sensorymotor', text: 'Looks at small objects nearby for one to two seconds' },
  { id: 's2.sensorymotor.26', step: 2, sub: 'sensorymotor', text: 'Follows movement of a toy close to face' },
  { id: 's2.sensorymotor.27', step: 2, sub: 'sensorymotor', text: 'Blinks if object is moved sharply towards face' },

  { id: 's2.feeding.01', step: 2, sub: 'feeding', text: 'Feeds at regular intervals throughout the day', summary: true },

  { id: 's2.sleeping.01', step: 2, sub: 'sleeping', text: 'Sleeps more at night than during the day', summary: true },
  { id: 's2.sleeping.02', step: 2, sub: 'sleeping', text: 'Able to settle self back to sleep if wakes during the night', summary: true },
  { id: 's2.sleeping.03', step: 2, sub: 'sleeping', text: 'Settles to sleep with calming input such as a warm bath, cuddle, being wrapped in a blanket etc. when tired', summary: true },

  /* ============================ STEP 3 ============================ */

  { id: 's3.foundations.01', step: 3, sub: 'foundations', text: 'Looks towards place where parent/carer is looking' },
  { id: 's3.foundations.02', step: 3, sub: 'foundations', text: 'Aware of events in his/her environment (e.g. searches with eyes when hears familiar person come into the room)', summary: true },
  { id: 's3.foundations.03', step: 3, sub: 'foundations', text: 'Looks puzzled or changes behaviour when hearing something new, different or unexpected' },
  { id: 's3.foundations.04', step: 3, sub: 'foundations', text: "Turns quickly to parent/carer's voice across the room" },
  { id: 's3.foundations.05', step: 3, sub: 'foundations', text: "Listens to parents' voices even if s/he can't see them" },
  { id: 's3.foundations.06', step: 3, sub: 'foundations', text: 'Responds differently to different tones of your voice (e.g. sing-song, questioning, soothing, playful) - tone of voice helps a child to understand meaning', summary: true },
  { id: 's3.foundations.07', step: 3, sub: 'foundations', text: 'Uses voice, gesture, eye contact and facial expression to make contact with people and keep their attention', summary: true },
  { id: 's3.foundations.08', step: 3, sub: 'foundations', text: 'Begins to develop and use the vowel sounds of the language used at home. For example, /ae/ as in hat, /e/ as in pet (for English language)' },
  { id: 's3.foundations.09', step: 3, sub: 'foundations', text: 'Babbles by repeating a series of the same sounds (reduplicated babble) e.g. ba-ba-ba, ma-ma-ma', summary: true },
  { id: 's3.foundations.10', step: 3, sub: 'foundations', text: 'Begins to develop and use some consonant sounds: e.g. /g-g/, /mmm/, /h/, /d-d/' },
  { id: 's3.foundations.11', step: 3, sub: 'foundations', text: 'Makes sounds for pleasure (e.g. vocalises with tuneful voice for minutes at a time to self when lying in cot or at play)', summary: true },
  { id: 's3.foundations.12', step: 3, sub: 'foundations', text: "Starts to sound like s/he is 'talking to you' (even if you can't understand him/her yet)" },
  { id: 's3.foundations.13', step: 3, sub: 'foundations', text: 'Vocalises more when adults use child directed speech' },

  { id: 's3.se_understanding.01', step: 3, sub: 'se_understanding', text: 'Is wary of unfamiliar events', summary: true },
  { id: 's3.se_understanding.02', step: 3, sub: 'se_understanding', text: 'Laughs and squeals when happy or excited', summary: true },
  { id: 's3.se_understanding.03', step: 3, sub: 'se_understanding', text: 'Gets upset if toy is taken away from him/her' },
  { id: 's3.se_understanding.04', step: 3, sub: 'se_understanding', text: 'Responds to facial expressions of happiness and sadness in others (e.g. smiles if adult smiles or frowns if adult frowns)', summary: true },

  { id: 's3.attachment.01', step: 3, sub: 'attachment', text: 'Prefers particular people (e.g. is happier and more settled with preferred carers, and unsettled or distressed with less familiar people)', summary: true },
  { id: 's3.attachment.02', step: 3, sub: 'attachment', text: 'Shows shyness or anxiety if approached by a stranger (when familiar adult is out of sight)' },
  { id: 's3.attachment.03', step: 3, sub: 'attachment', text: 'Can tolerate short separations from parent but shows pleasure at return', summary: true },

  { id: 's3.cognition.01', step: 3, sub: 'cognition', text: 'Predicts/anticipates a familiar activity (e.g. gets excited upon seeing spoon, anticipates game from seeing a familiar toy, seems disturbed if familiar game changes)', summary: true },
  { id: 's3.cognition.02', step: 3, sub: 'cognition', text: 'Very early imitation of adults (e.g. tries to move hands or object after watching adult)' },
  { id: 's3.cognition.03', step: 3, sub: 'cognition', text: 'Repeats action to make sound again (e.g. shaking rattles, squeezing noise makers, kicking at baby gym)', summary: true },
  { id: 's3.cognition.04', step: 3, sub: 'cognition', text: 'Persistently and deliberately reaches out for toys that interest him/her', summary: true },
  { id: 's3.cognition.05', step: 3, sub: 'cognition', text: 'Recognises familiar environmental sounds (e.g. washing machine, microwave, footsteps). This is shown by quietening, consistent reactions, turning to look at source of sound etc.' },
  { id: 's3.cognition.06', step: 3, sub: 'cognition', text: 'Looks around a room with interest' },
  { id: 's3.cognition.07', step: 3, sub: 'cognition', text: 'Uses feet to help in grasping objects' },

  { id: 's3.play.01', step: 3, sub: 'play', text: 'Is interested in small objects or the detail of a toy (e.g. will gaze at small beads in a rattle)' },
  { id: 's3.play.02', step: 3, sub: 'play', text: 'Moves limbs, changes facial expression and/or laughs in anticipation of being lifted' },
  { id: 's3.play.03', step: 3, sub: 'play', text: 'Smiles at image of self in mirror (but does not yet realise that this is reflection of him/herself)', summary: true },
  { id: 's3.play.04', step: 3, sub: 'play', text: 'Plays with and explores objects by touching them', summary: true },
  { id: 's3.play.05', step: 3, sub: 'play', text: 'Plays with and explores objects by looking at them' },
  { id: 's3.play.06', step: 3, sub: 'play', text: 'Plays with and explores objects by placing them in his/her mouth' },
  { id: 's3.play.07', step: 3, sub: 'play', text: 'Plays with and explores objects by listening to sounds made' },

  { id: 's3.large.01', step: 3, sub: 'large', text: 'Rolls over from front to back' },
  { id: 's3.large.02', step: 3, sub: 'large', text: 'Rolls over from back to front' },
  { id: 's3.large.03', step: 3, sub: 'large', text: 'Sits propped up' },
  { id: 's3.large.04', step: 3, sub: 'large', text: 'When supported in sitting, can turn head from side to side' },
  { id: 's3.large.05', step: 3, sub: 'large', text: 'When lying on tummy, can lift head and chest and support self with straight arms and flat hands', summary: true },
  { id: 's3.large.06', step: 3, sub: 'large', text: 'Raises head to look at feet when lying on back' },
  { id: 's3.large.07', step: 3, sub: 'large', text: 'When lying on back, lifts legs into vertical position and grasps feet' },
  { id: 's3.large.08', step: 3, sub: 'large', text: 'Reaches and plays with toes when lying on back or sitting up with support' },
  { id: 's3.large.09', step: 3, sub: 'large', text: 'Puts arms up to be lifted' },
  { id: 's3.large.10', step: 3, sub: 'large', text: 'Tries to sit up from lying on back when hands are held' },
  { id: 's3.large.11', step: 3, sub: 'large', text: 'Kicks strongly' },
  { id: 's3.large.12', step: 3, sub: 'large', text: 'Takes weight through legs and bounces up and down when held in a standing position', summary: true },

  { id: 's3.fine.01', step: 3, sub: 'fine', text: 'Hands are open most of the time' },
  { id: 's3.fine.02', step: 3, sub: 'fine', text: 'Uses whole hand to hold objects (palmar grasp)' },
  { id: 's3.fine.03', step: 3, sub: 'fine', text: 'Uses two hands to scoop up toys' },
  { id: 's3.fine.04', step: 3, sub: 'fine', text: 'Passes toys from hand to hand' },
  { id: 's3.fine.05', step: 3, sub: 'fine', text: 'Holds two toys - one in each hand' },
  { id: 's3.fine.06', step: 3, sub: 'fine', text: 'Reaches out to objects and faces close by with both hands to grasp them' },
  { id: 's3.fine.07', step: 3, sub: 'fine', text: 'Plays with objects, by banging, shaking, turning them around in his/her hands', summary: true },
  { id: 's3.fine.08', step: 3, sub: 'fine', text: 'Feels and plays with toys and everyday objects of different textures (e.g. smooth, rough, soft, furry, sticky)', summary: true },

  { id: 's3.vision.01', step: 3, sub: 'vision', text: 'Fixes gaze on interesting toys/objects at 15-25 cm and watches them for several seconds' },
  { id: 's3.vision.02', step: 3, sub: 'vision', text: 'Turns to follow a moving toy' },
  { id: 's3.vision.03', step: 3, sub: 'vision', text: 'Deliberately turns head/eyes', summary: true },

  { id: 's3.feeding.01', step: 3, sub: 'feeding', text: 'Puts hands on breast or bottle when feeding', summary: true },
  { id: 's3.feeding.02', step: 3, sub: 'feeding', text: 'Tolerates stimulation to gums when adult rubs gums with finger or trainer toothbrush', summary: true },

  { id: 's3.sleeping.01', step: 3, sub: 'sleeping', text: 'Has regular sleeps during the day', summary: true },
  { id: 's3.sleeping.02', step: 3, sub: 'sleeping', text: 'Able to settle more easily to sleep at night', summary: true },

  /* ============================ STEP 4 ============================ */

  { id: 's4.attention.01', step: 4, sub: 'attention', text: 'Turns immediately to familiar voices across a room' },
  { id: 's4.attention.02', step: 4, sub: 'attention', text: 'Watches and follows adult movements' },
  { id: 's4.attention.03', step: 4, sub: 'attention', text: 'Enjoys singing or rhyme games' },
  { id: 's4.attention.04', step: 4, sub: 'attention', text: "Anticipates actions, tickles etc. from sounds and tunes of songs and rhymes (e.g. giggles at end of 'round and round the garden' waiting for the tickle to come)", summary: true },
  { id: 's4.attention.05', step: 4, sub: 'attention', text: 'Responds to music by swaying, bouncing etc.' },

  { id: 's4.understanding.01', step: 4, sub: 'understanding', text: 'Recognises and responds to own name (e.g. turns or looks up in response to name)', summary: true },
  { id: 's4.understanding.02', step: 4, sub: 'understanding', text: 'Recognises some family names (e.g. mummy, daddy, names of siblings)', summary: true },
  { id: 's4.understanding.03', step: 4, sub: 'understanding', text: "Regularly stops activity when told 'no'" },

  { id: 's4.expression.01', step: 4, sub: 'expression', text: 'Uses voice or gesture to: attract attention (e.g. holding up objects, waving arms); ask for things (e.g. reaching, opening and shutting hands); refuse (e.g. pushing objects away, shaking head)', summary: true },
  { id: 's4.expression.02', step: 4, sub: 'expression', text: 'Uses voice, gestures or actions to join in with a familiar rhyme or game' },
  { id: 's4.expression.03', step: 4, sub: 'expression', text: 'Waves bye-bye through imitation (i.e. copies when others wave to him/her)' },

  { id: 's4.speech.01', step: 4, sub: 'speech', text: "Begins to imitate the voices of others, especially the vowels and 'ups and downs' of speech (intonation)" },
  { id: 's4.speech.02', step: 4, sub: 'speech', text: "Begins to imitate sounds - may copy you if you copy the child's sounds first", summary: true },
  { id: 's4.speech.03', step: 4, sub: 'speech', text: 'Communicates friendliness or annoyance through vocalisation' },
  { id: 's4.speech.04', step: 4, sub: 'speech', text: 'Voice is tuneful and expressive' },
  { id: 's4.speech.05', step: 4, sub: 'speech', text: 'Voice starts to have the tone and rhythm (patterns and stresses of familiar phrases) of the language spoken at home (first language)' },
  { id: 's4.speech.06', step: 4, sub: 'speech', text: 'Vocal babble is increasingly speech-like, containing consonants and vowels such as: /baba/ /gaga/', summary: true },
  { id: 's4.speech.07', step: 4, sub: 'speech', text: 'Tries lots of ways of making consonants in babble: most common /b/, /p/, /d/, /t/, /g/, /k/ are called stops; /m/, /n/, /ng/ are called nasals' },
  { id: 's4.speech.08', step: 4, sub: 'speech', text: 'Produces and copies mouth movements for speech sounds (e.g. putting lips together for /m/, rounding lips for /oo/)' },
  { id: 's4.speech.09', step: 4, sub: 'speech', text: "Begins to use varied double syllable sounds, e.g. 'dadi', 'babu' or uses a variety of syllables in continued babbling, e.g. 'badago' (variegated babble)" },

  { id: 's4.se_understanding.01', step: 4, sub: 'se_understanding', text: 'Reacts to an audience; e.g. repeats an activity/action that is received positively (a smile, laughed at, applauded, cheered)' },
  { id: 's4.se_understanding.02', step: 4, sub: 'se_understanding', text: 'Shows awareness of other children (e.g. watching and smiling or moving closer to them)', summary: true },
  { id: 's4.se_understanding.03', step: 4, sub: 'se_understanding', text: 'Shows more differentiated feelings/emotions (e.g. joy, fear, anger, surprise)', summary: true },
  { id: 's4.se_understanding.04', step: 4, sub: 'se_understanding', text: 'Shows delight at active play (e.g. rough and tumble, tickling)' },
  { id: 's4.se_understanding.05', step: 4, sub: 'se_understanding', text: 'Laughs with favourite people' },
  { id: 's4.se_understanding.06', step: 4, sub: 'se_understanding', text: 'Laughs during games' },
  { id: 's4.se_understanding.07', step: 4, sub: 'se_understanding', text: 'Repeats enjoyable activity' },
  { id: 's4.se_understanding.08', step: 4, sub: 'se_understanding', text: 'Demonstrates motivation and curiosity when exploring a new and interesting object', summary: true },

  { id: 's4.attachment.01', step: 4, sub: 'attachment', text: 'Likes to be close to adult - may cry and try to follow (by looking, reaching or crawling) when carer leaves the room', summary: true },
  { id: 's4.attachment.02', step: 4, sub: 'attachment', text: 'Expresses affection to familiar carers' },
  { id: 's4.attachment.03', step: 4, sub: 'attachment', text: "Looks back to parent/carer to check if not sure about something (e.g. looks back to check mother's reaction if stranger tries to pick them up)", summary: true },

  { id: 's4.cognition.01', step: 4, sub: 'cognition', text: 'Looks towards the floor when object is dropped by others' },
  { id: 's4.cognition.02', step: 4, sub: 'cognition', text: 'Watches own hand movements intently (for at least 5 seconds)' },
  { id: 's4.cognition.03', step: 4, sub: 'cognition', text: 'Watches toy being partially hidden under cloth or container and then finds it', summary: true },
  { id: 's4.cognition.04', step: 4, sub: 'cognition', text: 'Looks for objects that s/he has just dropped' },
  { id: 's4.cognition.05', step: 4, sub: 'cognition', text: 'Struggles to get objects that are out of reach' },
  { id: 's4.cognition.06', step: 4, sub: 'cognition', text: 'Anticipates movement of objects/persons in space (e.g. if ball rolls behind the couch, looks to the other side of the couch, expecting it to re-appear)', summary: true },
  { id: 's4.cognition.07', step: 4, sub: 'cognition', text: 'Actively explores objects using all senses - shaking, hitting, looking, feeling, tasting, mouthing, pulling, turning, poking', summary: true },
  { id: 's4.cognition.08', step: 4, sub: 'cognition', text: 'Remembers faces of people seen regularly' },
  { id: 's4.cognition.09', step: 4, sub: 'cognition', text: 'Begins to understand cause and effect - will repeat actions in order to repeat the effects', summary: true },
  { id: 's4.cognition.10', step: 4, sub: 'cognition', text: 'Pulls cloth/mat towards him/her to reach a toy (i.e. makes the toy/object come closer by pulling the surface it is lying on)' },
  { id: 's4.cognition.11', step: 4, sub: 'cognition', text: 'Uses objects to make sounds - bangs them together, hits toys with hammer, shakes rattle etc.' },
  { id: 's4.cognition.12', step: 4, sub: 'cognition', text: 'Stares with increased interest when a new object is shown to him/her' },
  { id: 's4.cognition.13', step: 4, sub: 'cognition', text: 'Watches the actions of others for at least 5 seconds' },
  { id: 's4.cognition.14', step: 4, sub: 'cognition', text: 'Imitates actions s/he sees performed by others that are already in his/her repertoire (e.g. if s/he knows how to bang hands on the table, s/he will copy another person doing this)' },

  { id: 's4.play.01', step: 4, sub: 'play', text: 'Enjoys playing peek-a-boo' },
  { id: 's4.play.02', step: 4, sub: 'play', text: 'Shows excitement during turn-taking games (e.g. claps hands, giggles as turn gets closer)', summary: true },
  { id: 's4.play.03', step: 4, sub: 'play', text: 'Can still be surprised by things disappearing and then reappearing suddenly (e.g. enjoyment of pop-up toys)' },
  { id: 's4.play.04', step: 4, sub: 'play', text: "Reaches out for mirror image, or plays with reflection in mirror. Still doesn't realise this image is of them" },
  { id: 's4.play.05', step: 4, sub: 'play', text: 'Mouths books, turns over several pages at once, stops momentarily at page that catches eye because of colour or texture' },

  { id: 's4.large.01', step: 4, sub: 'large', text: 'Sits alone without support and with a straight back', summary: true },
  { id: 's4.large.02', step: 4, sub: 'large', text: 'Sits and manipulates toys with hands' },
  { id: 's4.large.03', step: 4, sub: 'large', text: 'When sitting, can pick up a toy without losing balance' },
  { id: 's4.large.04', step: 4, sub: 'large', text: 'Can lean forward when sitting' },
  { id: 's4.large.05', step: 4, sub: 'large', text: 'Can move from sitting position to hands and knees (crawl position)' },
  { id: 's4.large.06', step: 4, sub: 'large', text: 'Crawls, bottom shuffles or rolls continuously to move around', summary: true },
  { id: 's4.large.07', step: 4, sub: 'large', text: 'Pulls self up to standing but cannot lower self down again (falls backward with a bump)' },
  { id: 's4.large.08', step: 4, sub: 'large', text: 'Supports whole weight on legs if holding on to support', summary: true },

  { id: 's4.fine.01', step: 4, sub: 'fine', text: "Can release toy from grasp by dropping or pressing against a firm surface, but can't yet place down deliberately" },
  { id: 's4.fine.02', step: 4, sub: 'fine', text: 'Picks up things between thumb and fingers - immature pincer grasp', summary: true },
  { id: 's4.fine.03', step: 4, sub: 'fine', text: 'Stretches out with one hand to grasp toy if offered' },
  { id: 's4.fine.04', step: 4, sub: 'fine', text: 'Looks at and pokes small objects like crumbs with index finger' },

  { id: 's4.vision.01', step: 4, sub: 'vision', text: 'Watches and follows people/objects/happenings in the environment up to 3m away', summary: true },
  { id: 's4.vision.02', step: 4, sub: 'vision', text: 'Watches toy/object as it falls down' },
  { id: 's4.vision.03', step: 4, sub: 'vision', text: 'Eyes now move together to look at people and objects' },

  { id: 's4.feeding.01', step: 4, sub: 'feeding', text: 'Grasps finger foods and brings them to mouth' },
  { id: 's4.feeding.02', step: 4, sub: 'feeding', text: 'Closes mouth on finger foods to suck/break them', summary: true },
  { id: 's4.feeding.03', step: 4, sub: 'feeding', text: 'Opens mouth for spoon' },
  { id: 's4.feeding.04', step: 4, sub: 'feeding', text: 'Accepts range of tastes' },
  { id: 's4.feeding.05', step: 4, sub: 'feeding', text: 'Accepts range of consistency (runny, thick, paste)' },
  { id: 's4.feeding.06', step: 4, sub: 'feeding', text: 'Accepts range of textures (smooth puree, chopped food, small soft lumps)', summary: true },
  { id: 's4.feeding.07', step: 4, sub: 'feeding', text: 'Locates and squashes or spits out lumps' },
  { id: 's4.feeding.08', step: 4, sub: 'feeding', text: 'Tries to grasp spoon when being fed' },
  { id: 's4.feeding.09', step: 4, sub: 'feeding', text: 'Holds own bottle/sipper cup' },
  { id: 's4.feeding.10', step: 4, sub: 'feeding', text: 'Drinks from cup held by adult' },

  { id: 's4.sleeping.01', step: 4, sub: 'sleeping', text: 'Anticipates bedtime due to routine (e.g. bath, pyjamas, drink, story then expects to be put down)', summary: true },
  { id: 's4.sleeping.02', step: 4, sub: 'sleeping', text: 'No longer requires feeding at night' },
  { id: 's4.sleeping.03', step: 4, sub: 'sleeping', text: 'Sleeps consistently for several hours during the night' },

  { id: 's4.washing.01', step: 4, sub: 'washing', text: 'Tolerates gentle splashing in the bath' },
  { id: 's4.washing.02', step: 4, sub: 'washing', text: 'Tolerates face and hair washing' },
  { id: 's4.washing.03', step: 4, sub: 'washing', text: 'Tolerates gum stimulation and teeth cleaning routines as teeth emerge (e.g. with finger-brush)', summary: true },

  /* ============================ STEP 5 ============================ */

  { id: 's5.attention.01', step: 5, sub: 'attention', text: 'Looks at the person speaking' },
  { id: 's5.attention.02', step: 5, sub: 'attention', text: "Follows with gaze when an adult directs attention to near objects by looking and pointing (e.g. adult points to a dog and says 'look at the dog' and the child looks at the dog)" },
  { id: 's5.attention.03', step: 5, sub: 'attention', text: 'Can get absorbed in an activity and will ignore distractions' },
  { id: 's5.attention.04', step: 5, sub: 'attention', text: 'Locates the direction sounds come from (e.g. looks appropriately in the direction of the sound)' },
  { id: 's5.attention.05', step: 5, sub: 'attention', text: 'Recognises the voices of key people in his/her life' },
  { id: 's5.attention.06', step: 5, sub: 'attention', text: 'Imitates and joins in babble of others' },
  { id: 's5.attention.07', step: 5, sub: 'attention', text: 'Understands the meaning associated with some environmental sounds (e.g. hears a telephone and immediately looks at the telephone)' },

  { id: 's5.understanding.01', step: 5, sub: 'understanding', text: 'Shows understanding of familiar objects by actions (e.g. pretends to drink from an empty cup, uses brush on hair)' },
  { id: 's5.understanding.02', step: 5, sub: 'understanding', text: 'Initiates give and take games by offering objects' },
  { id: 's5.understanding.03', step: 5, sub: 'understanding', text: "Responds to simple familiar language in context (e.g. child moves/looks to door when parent holds keys and says 'It's time to go'). At this stage, the child is mainly responding to tone of voice and situational clues in a particular, well-known routine" },
  { id: 's5.understanding.04', step: 5, sub: 'understanding', text: 'Understands names of some common objects (e.g. picks up or points to a toy when it is named and signed)' },
  { id: 's5.understanding.05', step: 5, sub: 'understanding', text: 'Waves bye-bye when asked' },
  { id: 's5.understanding.06', step: 5, sub: 'understanding', text: "Responds to keywords and/or signs in play (e.g. parent asks 'Where's the ball?' and child looks to find the ball)" },

  { id: 's5.expression.01', step: 5, sub: 'expression', text: 'Begins to point to objects, self and others close by, using index finger' },
  { id: 's5.expression.02', step: 5, sub: 'expression', text: 'Uses gesture or voice to respond' },
  { id: 's5.expression.03', step: 5, sub: 'expression', text: 'Uses gesture or voice to direct attention to objects and people as well as self' },
  { id: 's5.expression.04', step: 5, sub: 'expression', text: 'Makes it clear through gesture or voice when s/he wants something to happen again (e.g. play a game again or wants more to eat)' },
  { id: 's5.expression.05', step: 5, sub: 'expression', text: "Copies gestures as part of games and familiar routines (e.g. clapping hands, waving 'bye', blowing kisses, open hands for 'where is it' or 'all gone')" },
  { id: 's5.expression.06', step: 5, sub: 'expression', text: 'Communicates for a range of different purposes (e.g. to greet, to request, to protest, to label objects and people)' },

  { id: 's5.speech.01', step: 5, sub: 'speech', text: 'Uses sounds like those in the language used in the home' },
  { id: 's5.speech.02', step: 5, sub: 'speech', text: "Copies and uses voice spontaneously as part of games/familiar routines (e.g. 'bye-bye', 'all gone')" },
  { id: 's5.speech.03', step: 5, sub: 'speech', text: "Copies symbolic noises and baby words (e.g. 'woof-woof', 'choo-choo')" },
  { id: 's5.speech.04', step: 5, sub: 'speech', text: "Produces symbolic noises and baby words spontaneously (e.g. 'aaah!' when cuddling toy, 'brmm-brmm' for a car)" },
  { id: 's5.speech.05', step: 5, sub: 'speech', text: 'Uses a range of vowels from the language heard in the home, e.g. /i/ as in bit, /a/ as in bat, /e/ as in bet, /u/ as in but (English language)' },
  { id: 's5.speech.06', step: 5, sub: 'speech', text: 'Vocalises in attempts to copy words' },
  { id: 's5.speech.07', step: 5, sub: 'speech', text: "Imitates familiar consonants and vowel sounds associated with frequently used toys and/or pictures (e.g. 'baa-baa' for a sheep, 'moo-moo' for a cow)" },

  { id: 's5.se_understanding.01', step: 5, sub: 'se_understanding', text: 'Responds differently to children and adults (e.g. may be more interested in watching children than adults, may pay more attention when children talk to him/her)' },
  { id: 's5.se_understanding.02', step: 5, sub: 'se_understanding', text: "Is aware of others' feelings (e.g. looks concerned if hears crying, looks excited if hears a familiar happy voice)" },
  { id: 's5.se_understanding.03', step: 5, sub: 'se_understanding', text: 'Makes body stiff and vocalises when protesting' },

  { id: 's5.attachment.01', step: 5, sub: 'attachment', text: "Explores new toys and environments, but looks back to parent regularly to 'check in'" },
  { id: 's5.attachment.02', step: 5, sub: 'attachment', text: 'Needs reassurance from parent when in a social situation with strangers' },
  { id: 's5.attachment.03', step: 5, sub: 'attachment', text: 'May become distressed and anxious if left somewhere without parent or carer' },
  { id: 's5.attachment.04', step: 5, sub: 'attachment', text: 'Clings to parent and hides face when feeling scared or overwhelmed' },

  { id: 's5.cognition.01', step: 5, sub: 'cognition', text: 'Watches people and events for a long time (several minutes)' },
  { id: 's5.cognition.02', step: 5, sub: 'cognition', text: 'Gazes at a picture of self' },
  { id: 's5.cognition.03', step: 5, sub: 'cognition', text: 'Explores new objects systematically (e.g. first banging, then mouthing, then turning over) - helps growing understanding and awareness of cause and effect' },
  { id: 's5.cognition.04', step: 5, sub: 'cognition', text: 'Knows there are different ways to play with different toys (e.g. ball is for rolling or throwing, car is for pushing, blocks are for posting)' },
  { id: 's5.cognition.05', step: 5, sub: 'cognition', text: 'Interested in things that go together (e.g. cup and saucer, parts of a puzzle)' },
  { id: 's5.cognition.06', step: 5, sub: 'cognition', text: 'Realises one object can act as a container for another (e.g. puts smaller objects inside bigger ones)' },
  { id: 's5.cognition.07', step: 5, sub: 'cognition', text: 'Looks at pictures in books with interest without needing adult input' },
  { id: 's5.cognition.08', step: 5, sub: 'cognition', text: 'Makes marks on paper using crayon' },
  { id: 's5.cognition.09', step: 5, sub: 'cognition', text: "Aware of routines and anticipates what will happen next (e.g. expects to be fed if placed in highchair) - may become distressed if the expected routine doesn't happen" },
  { id: 's5.cognition.10', step: 5, sub: 'cognition', text: 'Can imitate sounds or gestures that are not part of his/her repertoire (i.e. child watches adult carefully and then imitates something s/he has not done before)' },
  { id: 's5.cognition.11', step: 5, sub: 'cognition', text: 'Can imitate using an object (e.g. holds beater and bangs drum, pushes button on a toy etc. after seeing adult do it)' },
  { id: 's5.cognition.12', step: 5, sub: 'cognition', text: 'Can imitate clapping hands' },
  { id: 's5.cognition.13', step: 5, sub: 'cognition', text: 'Watches toy being hidden under a cloth or container and finds it immediately' },
  { id: 's5.cognition.14', step: 5, sub: 'cognition', text: 'Drops toys deliberately and repeatedly and watches them fall to the ground' },
  { id: 's5.cognition.15', step: 5, sub: 'cognition', text: 'Looks in the right place for toys that fall out of sight' },
  { id: 's5.cognition.16', step: 5, sub: 'cognition', text: 'Practises new skills repeatedly' },

  { id: 's5.play.01', step: 5, sub: 'play', text: 'Can play by focusing his/her attention on the same toy as another child at the same time' },
  { id: 's5.play.02', step: 5, sub: 'play', text: "Creates variations on familiar games (e.g. 'hides' in different ways during peek-a-boo games and frequently tries out new ways of 'hiding')" },
  { id: 's5.play.03', step: 5, sub: 'play', text: 'Rolls ball or toy car to others' },
  { id: 's5.play.04', step: 5, sub: 'play', text: "Anticipates body movements that go with rhymes (e.g. bringing hands together for 'clap hands')" },
  { id: 's5.play.05', step: 5, sub: 'play', text: 'Enjoys knocking down towers built by adult' },
  { id: 's5.play.06', step: 5, sub: 'play', text: 'Engages in simple pretend play with soft toys (e.g. hugs and kisses teddy)' },
  { id: 's5.play.07', step: 5, sub: 'play', text: 'Enjoys putting objects in and out of containers' },

  { id: 's5.large.01', step: 5, sub: 'large', text: 'Can rise to sitting position from lying down' },
  { id: 's5.large.02', step: 5, sub: 'large', text: 'Crawls on hands/knees or shuffles on buttocks' },
  { id: 's5.large.03', step: 5, sub: 'large', text: 'Kneels up against furniture' },
  { id: 's5.large.04', step: 5, sub: 'large', text: 'Pulls self up to standing against furniture and can lower self back down again' },
  { id: 's5.large.05', step: 5, sub: 'large', text: 'Walks around furniture lifting one foot and stepping sideways (cruising)' },
  { id: 's5.large.06', step: 5, sub: 'large', text: 'Bends to pick up a toy from the floor when standing up holding onto furniture' },
  { id: 's5.large.07', step: 5, sub: 'large', text: 'Walks with one or both hands held by adult' },
  { id: 's5.large.08', step: 5, sub: 'large', text: 'Stands by him/herself for a few seconds' },
  { id: 's5.large.09', step: 5, sub: 'large', text: 'Throws toys/objects deliberately' },

  { id: 's5.fine.01', step: 5, sub: 'fine', text: 'Holds an object in each hand and brings them together in the middle (e.g. holds two blocks and bangs them together)' },
  { id: 's5.fine.02', step: 5, sub: 'fine', text: 'Picks up small objects easily between thumb and index finger (pincer grasp)' },
  { id: 's5.fine.03', step: 5, sub: 'fine', text: 'Uses index finger to point at objects', summary: true },
  { id: 's5.fine.04', step: 5, sub: 'fine', text: 'Picks up larger objects (e.g. teddy, ball)' },
  { id: 's5.fine.05', step: 5, sub: 'fine', text: 'Drops toys or objects deliberately' },
  { id: 's5.fine.06', step: 5, sub: 'fine', text: 'Puts toys or objects into a container' },
  { id: 's5.fine.07', step: 5, sub: 'fine', text: 'Takes toys or objects out of a container' },
  { id: 's5.fine.08', step: 5, sub: 'fine', text: 'Helps turn pages in a book' },
  { id: 's5.fine.09', step: 5, sub: 'fine', text: 'Holds pen using a palmar grasp and tries to imitate scribble' },
  { id: 's5.fine.10', step: 5, sub: 'fine', text: 'Removes pieces from inset puzzle and large pegs from pegboard', summary: true },

  { id: 's5.vision.01', step: 5, sub: 'vision', text: 'Predicts path of moving object (knows where moving object is likely to go and looks there)', summary: true },

  { id: 's5.feeding.01', step: 5, sub: 'feeding', text: 'Drinks from feeder cup with help' },
  { id: 's5.feeding.02', step: 5, sub: 'feeding', text: 'Attempts to use spoon - can guide towards mouth but food often falls off', summary: true },
  { id: 's5.feeding.03', step: 5, sub: 'feeding', text: 'Bites finger foods' },
  { id: 's5.feeding.04', step: 5, sub: 'feeding', text: 'Eats lumps (e.g. in yoghurt or semi-pureed food)', summary: true },

  { id: 's5.sleeping.01', step: 5, sub: 'sleeping', text: 'Is sleeping through the night consistently' },
  { id: 's5.sleeping.02', step: 5, sub: 'sleeping', text: 'Accepting of regular bedtime', summary: true },

  { id: 's5.washing.01', step: 5, sub: 'washing', text: 'Plays with a range of bath toys' },
  { id: 's5.washing.02', step: 5, sub: 'washing', text: 'Begins to actively participate in bathing (e.g. offers or lifts body part ready for washing)' },

  { id: 's5.toileting.01', step: 5, sub: 'toileting', text: 'Actively co-operates with nappy changing (e.g. lies still, helps hold legs up)', summary: true },

  /* ============================ STEP 6 ============================ */

  { id: 's6.attention.01', step: 6, sub: 'attention', text: 'Waits for speaker/signer to finish before taking his/her turn' },
  { id: 's6.attention.02', step: 6, sub: 'attention', text: 'Follows with eyes when others point to distant objects - over 3m away' },
  { id: 's6.attention.03', step: 6, sub: 'attention', text: "Attends to an object when parent/carer draws his/her attention to it (by looking and pointing) - joint attention" },
  { id: 's6.attention.04', step: 6, sub: 'attention', text: 'Looks at an object and then back to adult to direct adult attention to it' },
  { id: 's6.attention.05', step: 6, sub: 'attention', text: 'Concentrates intently on an object or activity of own choosing for short periods' },
  { id: 's6.attention.06', step: 6, sub: 'attention', text: 'Watches and listens to others, copying some behaviours in own play' },
  { id: 's6.attention.07', step: 6, sub: 'attention', text: 'Attends to pictures for a short time, labeling and making a comment - this could be done with adult guidance or independently' },
  { id: 's6.attention.08', step: 6, sub: 'attention', text: 'Bounces rhythmically when being sung to or when listening to music' },

  { id: 's6.understanding.01', step: 6, sub: 'understanding', text: 'Shows understanding of at least 15 words/signs: e.g. looks at named person; points to or finds an object when asked to (e.g. Where are your shoes?)', summary: true },
  { id: 's6.understanding.02', step: 6, sub: 'understanding', text: 'Points to named/signed items in picture books' },
  { id: 's6.understanding.03', step: 6, sub: 'understanding', text: 'Simple conversations take place between adult and child mainly focusing on the here and now', summary: true },

  { id: 's6.expression.01', step: 6, sub: 'expression', text: 'Points to objects in the environment to direct adult attention and share interest - may vocalise while pointing' },
  { id: 's6.expression.02', step: 6, sub: 'expression', text: 'Points toward desired objects out of reach to request them', summary: true },
  { id: 's6.expression.03', step: 6, sub: 'expression', text: 'Imitates signs/spoken words', split: true },
  { id: 's6.expression.04', step: 6, sub: 'expression', text: 'Uses approximately five words/signs without prompting', split: true, summary: true },
  { id: 's6.expression.05', step: 6, sub: 'expression', text: "Asks for favourite games using words/signs/gestures (e.g. peek-a-boo by saying 'boo' or hiding face in hands)", split: true },
  { id: 's6.expression.06', step: 6, sub: 'expression', text: 'Speaks/signs to name favourite items (e.g. bubbles, ball, cat)', split: true },
  { id: 's6.expression.07', step: 6, sub: 'expression', text: 'Speaks/signs to make requests (e.g. drink, more)', split: true },
  { id: 's6.expression.08', step: 6, sub: 'expression', text: "Waves 'bye-bye' spontaneously" },

  { id: 's6.speech.01', step: 6, sub: 'speech', text: 'Babbles freely when alone or playing', summary: true },
  { id: 's6.speech.02', step: 6, sub: 'speech', text: "Own vocalisations sound more like speech and are recognised as 'words' - you may say 'That's his word for...'" },
  { id: 's6.speech.03', step: 6, sub: 'speech', text: 'Imitates familiar spoken words', summary: true },
  { id: 's6.speech.04', step: 6, sub: 'speech', text: "Plays vocal games with parent/carer - copying his/her noises" },
  { id: 's6.speech.05', step: 6, sub: 'speech', text: "Uses a wide range of consonants and vowels in babble/jargon. /p/, /d/, /b/ (stops) are the most common sounds used in first words such as 'bibi' for biscuit" },

  { id: 's6.se_understanding.01', step: 6, sub: 'se_understanding', text: 'Uses other person to help achieve a goal (e.g. get an object out of reach, activate a wind up toy)' },
  { id: 's6.se_understanding.02', step: 6, sub: 'se_understanding', text: 'Laughs at discrepancies (e.g. putting shoe on head)', summary: true },
  { id: 's6.se_understanding.03', step: 6, sub: 'se_understanding', text: "Laughs in anticipation (e.g. waiting for tickle in 'round the garden')" },
  { id: 's6.se_understanding.04', step: 6, sub: 'se_understanding', text: 'Becomes distressed if intended action is thwarted (e.g. reaches towards an unsafe object which parent/carer then removes)' },
  { id: 's6.se_understanding.05', step: 6, sub: 'se_understanding', text: 'Shows interest in the activities of others', summary: true },
  { id: 's6.se_understanding.06', step: 6, sub: 'se_understanding', text: 'Initiates interaction with other children', summary: true },

  { id: 's6.attachment.01', step: 6, sub: 'attachment', text: "Uses parent/carer for 'emotional refueling' when feeling tired, stressed or frustrated (e.g. stops playing to have a cuddle, sits quietly snuggled in on carer's lap for a few minutes, asks for favourite story etc.)", summary: true },
  { id: 's6.attachment.02', step: 6, sub: 'attachment', text: "Takes favourite 'comfort' toy or other object to bed" },
  { id: 's6.attachment.03', step: 6, sub: 'attachment', text: "Uses 'comfort' toy or object to calm self when in an unfamiliar environment", summary: true },
  { id: 's6.attachment.04', step: 6, sub: 'attachment', text: 'Prefers to be with familiar people' },

  { id: 's6.cognition.01', step: 6, sub: 'cognition', text: 'Co-operates in everyday routines (e.g. dressing, bathing, singing games, tidying up)' },
  { id: 's6.cognition.02', step: 6, sub: 'cognition', text: "Imitates others' use of objects, gesture or voice almost immediately" },
  { id: 's6.cognition.03', step: 6, sub: 'cognition', text: "Experiments - tries something and then reflects on it, and tries something else (e.g. if a puzzle piece doesn't fit, tries it in the other holes)", summary: true },
  { id: 's6.cognition.04', step: 6, sub: 'cognition', text: 'Intensely curious, exploring objects, rooms and outside areas (NB: If child is not yet mobile, they may show curiosity by pointing or looking at areas/objects they would like to explore)' },
  { id: 's6.cognition.05', step: 6, sub: 'cognition', text: 'Recognises favourite toys, games and activities (e.g. sees character in favourite book and brings same toy for you to play with)' },
  { id: 's6.cognition.06', step: 6, sub: 'cognition', text: 'Enjoys listening to the same story over and over again' },
  { id: 's6.cognition.07', step: 6, sub: 'cognition', text: 'Shows problem-solving skills after demonstration by adult or older child (e.g. uses stick to obtain object out of reach, puts toys in bag or pockets if too many to carry etc.)', summary: true },
  { id: 's6.cognition.08', step: 6, sub: 'cognition', text: 'Demonstrates persistent search for objects, even when hidden under 2-3 covers' },

  { id: 's6.play.01', step: 6, sub: 'play', text: 'Enjoys picture books and simple stories' },
  { id: 's6.play.02', step: 6, sub: 'play', text: 'Play demonstrates understanding of use of objects - may put telephone to ear, turn the pages of a book, stir a spoon in a cup, attempt to place pieces in a puzzle', summary: true },
  { id: 's6.play.03', step: 6, sub: 'play', text: 'Demonstrates early pretend behaviours (e.g. pretends to be asleep - covers self with a blanket and closes eyes)' },
  { id: 's6.play.04', step: 6, sub: 'play', text: "Copies the actions and activities of others as part of his/her play" },
  { id: 's6.play.05', step: 6, sub: 'play', text: 'Links ideas in play in simple combinations (e.g. puts doll in car then pushes car along)', summary: true },
  { id: 's6.play.06', step: 6, sub: 'play', text: 'Interactive turn-taking games with adult quite often involve toys and other objects (e.g. fetching games, feeding dolly, waving bye-bye to each other)', summary: true },
  { id: 's6.play.07', step: 6, sub: 'play', text: "Enjoys teasing games (e.g. 'I'm going to get you' tickling, pretending to give something but then taking it back etc.)" },
  { id: 's6.play.08', step: 6, sub: 'play', text: 'Play writes with pencils, chalks and/or crayons' },
  { id: 's6.play.09', step: 6, sub: 'play', text: 'Accepts adult varying a game or pretend play and imitates and joins in with new actions/routines' },
  { id: 's6.play.10', step: 6, sub: 'play', text: "Uses 'symbolic sounds' for objects and animals (e.g. 'brrm brrm' for car in pretend play)" },

  { id: 's6.large.01', step: 6, sub: 'large', text: 'Takes first few steps - feet wide apart, uneven steps, arms raised for balance', summary: true },
  { id: 's6.large.02', step: 6, sub: 'large', text: 'Can stand up alone, without holding on to anything', summary: true },
  { id: 's6.large.03', step: 6, sub: 'large', text: 'Sits down from standing with a bump' },
  { id: 's6.large.04', step: 6, sub: 'large', text: 'Crawls upstairs' },
  { id: 's6.large.05', step: 6, sub: 'large', text: 'Comes downstairs backwards on knees (crawling)' },
  { id: 's6.large.06', step: 6, sub: 'large', text: 'Carries large toy, or several toys while walking' },
  { id: 's6.large.07', step: 6, sub: 'large', text: 'Pulls toy on string along behind while walking' },

  { id: 's6.fine.01', step: 6, sub: 'fine', text: 'Builds tower of 2 blocks' },
  { id: 's6.fine.02', step: 6, sub: 'fine', text: 'Scribbles with crayon holding it with palmar grasp', summary: true },
  { id: 's6.fine.03', step: 6, sub: 'fine', text: 'Turns over container to tip out contents' },
  { id: 's6.fine.04', step: 6, sub: 'fine', text: 'Drops blocks through large round hole in a posting box' },

  { id: 's6.vision.01', step: 6, sub: 'vision', text: 'Watches actions outside and points to show interest' },

  { id: 's6.feeding.01', step: 6, sub: 'feeding', text: 'Drinks from feeder cup without aid', summary: true },
  { id: 's6.feeding.02', step: 6, sub: 'feeding', text: 'Tries to use spoon to feed him/herself' },
  { id: 's6.feeding.03', step: 6, sub: 'feeding', text: 'Chews lumpy food', summary: true },
  { id: 's6.feeding.04', step: 6, sub: 'feeding', text: 'Bites pieces of soft biscuit or banana etc.', summary: true },

  { id: 's6.sleeping.01', step: 6, sub: 'sleeping', text: 'Only having one nap during the day', summary: true },

  { id: 's6.washing.01', step: 6, sub: 'washing', text: 'Co-operates with teeth brushing' },
  { id: 's6.washing.02', step: 6, sub: 'washing', text: 'Co-operates with drying hands' },
  { id: 's6.washing.03', step: 6, sub: 'washing', text: 'Actively participates in bathing (e.g. uses sponge on arms and legs)', summary: true },

  { id: 's6.dressing.01', step: 6, sub: 'dressing', text: 'Removes socks' },
  { id: 's6.dressing.02', step: 6, sub: 'dressing', text: 'Removes unfastened shoes' },
  { id: 's6.dressing.03', step: 6, sub: 'dressing', text: 'Removes loose hat' },
  { id: 's6.dressing.04', step: 6, sub: 'dressing', text: 'Co-operates in dressing', summary: true },

  /* ============================ STEP 7 ============================ */

  { id: 's7.attention.01', step: 7, sub: 'attention', text: 'Looks at adult to gain attention before pointing' },
  { id: 's7.attention.02', step: 7, sub: 'attention', text: 'Enjoys nursery rhymes and demonstrates listening by trying to join in with actions or vocalisations' },
  { id: 's7.attention.03', step: 7, sub: 'attention', text: "Understands and follows simple instructions in context such as 'Give me the ball' or 'Kiss Daddy night-night'" },
  { id: 's7.attention.04', step: 7, sub: 'attention', text: "Plays 'ready steady go' or '1, 2, 3, go' games, listening and waiting or sometimes imitating alongside speaker", summary: true },
  { id: 's7.attention.05', step: 7, sub: 'attention', text: "Shows anticipation in relation to key phrases in games (e.g. 'I'm coming' in hide and seek, or chasing games)" },

  { id: 's7.understanding.01', step: 7, sub: 'understanding', text: 'Understands 1-2 new words each week' },
  { id: 's7.understanding.02', step: 7, sub: 'understanding', text: "Understands familiar words in new contexts each week (e.g. learns that 'bath' means the bath in other people's houses as well own bath at home)" },
  { id: 's7.understanding.03', step: 7, sub: 'understanding', text: 'Selects familiar objects (e.g. will go and find objects when asked or identifies objects from a group)' },
  { id: 's7.understanding.04', step: 7, sub: 'understanding', text: 'Follows simple instructions, particularly if accompanied by gestures/signs (e.g. pointing to places, things or people)', summary: true },
  { id: 's7.understanding.05', step: 7, sub: 'understanding', text: 'Identifies simple body parts on self (e.g. hair, eyes, ears, nose)' },

  { id: 's7.expression.01', step: 7, sub: 'expression', text: 'Uses at least 10 words/signs consistently', split: true },
  { id: 's7.expression.02', step: 7, sub: 'expression', text: 'Uses verbs and adjective-type words (e.g. go, sleep, hot, big)', split: true, summary: true },
  { id: 's7.expression.03', step: 7, sub: 'expression', text: "Uses words/signs to comment on what's happening (e.g. says/signs bird if sees one in the garden)", split: true, summary: true },
  { id: 's7.expression.04', step: 7, sub: 'expression', text: 'Uses words/signs to refer to non-present people or objects', split: true },
  { id: 's7.expression.05', step: 7, sub: 'expression', text: "Has favourite 'phrases' or signs that s/he uses often (e.g. 'thatone')", split: true },
  { id: 's7.expression.06', step: 7, sub: 'expression', text: 'Sings/signs along with favourite action rhyme (words/signs may be unclear)', split: true },
  { id: 's7.expression.07', step: 7, sub: 'expression', text: "Comments on something that has just happened (e.g. 'doggy' if saw a dog on the way home, 'fall down' if blocks have just crashed over)", split: true },

  { id: 's7.speech.01', step: 7, sub: 'speech', text: "Uses approximate forms of words to communicate (e.g. 'mu' for more, 'din' for drink)" },
  { id: 's7.speech.02', step: 7, sub: 'speech', text: "Imitates mouth movements for production of a variety of consonant and vowel combinations e.g. 'mama', 'boo-boo', 'bow-wow'. Child may move mouth but not use voice", summary: true },
  { id: 's7.speech.03', step: 7, sub: 'speech', text: 'Uses a wide range of ups and downs (intonation) and rhythms to reflect mood, (e.g. excitement, level of interest and involvement)' },

  { id: 's7.se_understanding.01', step: 7, sub: 'se_understanding', text: 'Shows signs of jealousy', summary: true },
  { id: 's7.se_understanding.02', step: 7, sub: 'se_understanding', text: 'Shows defiance' },
  { id: 's7.se_understanding.03', step: 7, sub: 'se_understanding', text: 'Shows pride and pleasure in new accomplishments', summary: true },
  { id: 's7.se_understanding.04', step: 7, sub: 'se_understanding', text: 'Is persistent in completing tasks and activities with more than one part (e.g. puzzle, posting etc.)' },

  { id: 's7.attachment.01', step: 7, sub: 'attachment', text: 'Plays happily alone but near familiar adult', summary: true },
  { id: 's7.attachment.02', step: 7, sub: 'attachment', text: "Watches the emotional reactions of parent/carer and uses them as a guide in new situations (e.g. watches parent's face before approaching strange dog, or climbing steps on slide and stops if parent looks anxious)", summary: true },
  { id: 's7.attachment.03', step: 7, sub: 'attachment', text: 'Uses parent as secure base from which to explore independently in new environments (e.g. ventures away from parent to play and interact with others, but returns for a cuddle if becomes anxious)' },

  { id: 's7.cognition.01', step: 7, sub: 'cognition', text: 'Imitates some everyday routines (e.g. washing clothes, sweeping floor, dusting)', summary: true },
  { id: 's7.cognition.02', step: 7, sub: 'cognition', text: 'Copies things s/he sees and hears others doing around him/her (e.g. phrases, parts of games and actions)' },
  { id: 's7.cognition.03', step: 7, sub: 'cognition', text: "Experiments with different objects to look for other new properties - s/he is like a 'little scientist' (e.g. plays with a plastic bowl by putting it on his/her head, filling it with blocks, banging it, covering toys with it, looking through it)" },
  { id: 's7.cognition.04', step: 7, sub: 'cognition', text: 'Solves simple problems independently (e.g. retrieving out-of-reach toys, carrying toys from one place to another)', summary: true },
  { id: 's7.cognition.05', step: 7, sub: 'cognition', text: 'Matches objects with parts that fit together (e.g. puts lid on teapot)' },
  { id: 's7.cognition.06', step: 7, sub: 'cognition', text: 'Hands a toy to an adult for assistance, when unable to get it to work and sees adult as someone who can help' },
  { id: 's7.cognition.07', step: 7, sub: 'cognition', text: 'No longer uses mouthing to explore objects' },
  { id: 's7.cognition.08', step: 7, sub: 'cognition', text: 'Enjoys playing with objects of different sizes that go together (e.g. stacking cups) and learning about the relative sizes of objects' },
  { id: 's7.cognition.09', step: 7, sub: 'cognition', text: 'Finds toy when hidden under one of 2-3 identical covers laid out in a row - uses visual memory to find the right cover', summary: true },
  { id: 's7.cognition.10', step: 7, sub: 'cognition', text: 'Imitates making strokes and dots on paper' },
  { id: 's7.cognition.11', step: 7, sub: 'cognition', text: 'Joins in simple routines spontaneously' },
  { id: 's7.cognition.12', step: 7, sub: 'cognition', text: 'Remembers where objects belong (e.g. puts toys away in the right place and knows where to find them later)' },

  { id: 's7.play.01', step: 7, sub: 'play', text: 'Includes other people and objects in pretend play (e.g. puts doll in bed, makes toy animal/car move, feeds a doll or teddy with a spoon or cup)' },
  { id: 's7.play.02', step: 7, sub: 'play', text: 'Watches what other children are doing' },
  { id: 's7.play.03', step: 7, sub: 'play', text: 'Plays ball co-operatively with an adult (e.g. may kick or roll the ball back and forth)', summary: true },
  { id: 's7.play.04', step: 7, sub: 'play', text: 'Brings toys to share with parent' },
  { id: 's7.play.05', step: 7, sub: 'play', text: 'Enjoys sharing books' },
  { id: 's7.play.06', step: 7, sub: 'play', text: 'Loads trolley to move objects around' },
  { id: 's7.play.07', step: 7, sub: 'play', text: "Enjoys 'ready steady go' and '1, 2, 3 go' games" },
  { id: 's7.play.08', step: 7, sub: 'play', text: "Enjoys anticipation games/toys such as 'jack-in-the-box'" },
  { id: 's7.play.09', step: 7, sub: 'play', text: 'Understands and follows stories read to him/her. Has favourite stories and characters', summary: true },

  { id: 's7.large.01', step: 7, sub: 'large', text: 'Walks with shorter steps and legs closer together - no longer needs to hold arms up for balance', summary: true },
  { id: 's7.large.02', step: 7, sub: 'large', text: 'Runs taking care - some difficulty with avoiding obstacles' },
  { id: 's7.large.03', step: 7, sub: 'large', text: 'Starts to climb' },
  { id: 's7.large.04', step: 7, sub: 'large', text: 'Walks upstairs holding hand of adult' },
  { id: 's7.large.05', step: 7, sub: 'large', text: 'Steps backwards downstairs, holding on to each step' },
  { id: 's7.large.06', step: 7, sub: 'large', text: 'Bumps down a few steps on bottom' },
  { id: 's7.large.07', step: 7, sub: 'large', text: "Gets onto child's chair without help backwards or sideways" },
  { id: 's7.large.08', step: 7, sub: 'large', text: 'Has a wide variety of different ways to sit to play', summary: true },
  { id: 's7.large.09', step: 7, sub: 'large', text: 'Kneels upright on flat surface without support' },

  { id: 's7.fine.01', step: 7, sub: 'fine', text: 'Builds a tower with three blocks', summary: true },
  { id: 's7.fine.02', step: 7, sub: 'fine', text: 'Shows a preference for one hand or the other (e.g. reaches out with one hand more than the other to pick up toys)' },
  { id: 's7.fine.03', step: 7, sub: 'fine', text: 'Uses both hands together and in the middle (not to one side or the other) - one holds and the other manipulates' },
  { id: 's7.fine.04', step: 7, sub: 'fine', text: 'Holds pencil in the middle, using fingers (no longer using palmar grasp)' },
  { id: 's7.fine.05', step: 7, sub: 'fine', text: 'Scribbles spontaneously and makes dots on paper', summary: true },
  { id: 's7.fine.06', step: 7, sub: 'fine', text: 'Places large round pegs in pegboard' },
  { id: 's7.fine.07', step: 7, sub: 'fine', text: 'Fits round shapes into puzzle' },
  { id: 's7.fine.08', step: 7, sub: 'fine', text: 'Posts round shape into posting box or shape sorter', summary: true },

  { id: 's7.vision.01', step: 7, sub: 'vision', text: 'Recognises familiar people at a distance', summary: true },
  { id: 's7.vision.02', step: 7, sub: 'vision', text: 'Points to distant interesting objects outside' },
  { id: 's7.vision.03', step: 7, sub: 'vision', text: 'Watches small moving toy/object at 3m or more away' },

  { id: 's7.feeding.01', step: 7, sub: 'feeding', text: 'Can locate mouth with empty spoon' },
  { id: 's7.feeding.02', step: 7, sub: 'feeding', text: 'Scoops food onto spoon independently', summary: true },
  { id: 's7.feeding.03', step: 7, sub: 'feeding', text: 'Accepts food from a fork' },
  { id: 's7.feeding.04', step: 7, sub: 'feeding', text: 'Combines biting and chewing to eat bread, banana, crisps, biscuits etc.' },
  { id: 's7.feeding.05', step: 7, sub: 'feeding', text: 'Holds cup with both hands and drinks without much spilling', summary: true },
  { id: 's7.feeding.06', step: 7, sub: 'feeding', text: 'Able to participate in family mealtime routines (e.g. sits in high chair or booster seat at the table, joins in with interaction)', summary: true },
  { id: 's7.feeding.07', step: 7, sub: 'feeding', text: 'Drinks from a straw' },

  { id: 's7.washing.01', step: 7, sub: 'washing', text: 'Tolerates use of toothpaste and brush', summary: true },
  { id: 's7.washing.02', step: 7, sub: 'washing', text: 'Co-operates with washing hands' },
  { id: 's7.washing.03', step: 7, sub: 'washing', text: 'Beginning to brush own hair' },

  { id: 's7.dressing.01', step: 7, sub: 'dressing', text: 'Places hat on head' },
  { id: 's7.dressing.02', step: 7, sub: 'dressing', text: 'Assists with dressing (e.g. holds out arm for sleeve and foot for shoe)', summary: true },
  { id: 's7.dressing.03', step: 7, sub: 'dressing', text: 'Aware of where clothes are kept (e.g. outdoor coat and shoes by the door)' },

  { id: 's7.toileting.01', step: 7, sub: 'toileting', text: 'Indicates wet or soiled nappy/pants', summary: true },

  { id: 's7.independence.01', step: 7, sub: 'independence', text: 'Wants to do things independently (e.g. feeding using utensils, undressing self)' },

  /* ============================ STEP 8 ============================ */

  { id: 's8.attention.01', step: 8, sub: 'attention', text: "Follows directions if they are part of a game and relate to what s/he is doing (e.g. responds to 'Come and sit here' when a snack or drink is on the table)" },
  { id: 's8.attention.02', step: 8, sub: 'attention', text: 'Shows sustained interest in looking at pictures/books with adult' },
  { id: 's8.attention.03', step: 8, sub: 'attention', text: 'Goes to get a specific favourite picture or book when requested' },
  { id: 's8.attention.04', step: 8, sub: 'attention', text: 'Attends to speech directed to him/her and listens with interest to general talk' },
  { id: 's8.attention.05', step: 8, sub: 'attention', text: 'Learns to wait for others to finish what they are saying - turn-taking better established and fewer vocal clashes' },
  { id: 's8.attention.06', step: 8, sub: 'attention', text: "Plays simple co-operative listening games (e.g. 'give it to.....')", summary: true },
  { id: 's8.attention.07', step: 8, sub: 'attention', text: "Waits for 'go' signal in 'ready, steady, go' games" },

  { id: 's8.understanding.01', step: 8, sub: 'understanding', text: 'Recognises and will identify many objects and pictures when named/signed', summary: true },
  { id: 's8.understanding.02', step: 8, sub: 'understanding', text: "Points to body parts on others (e.g. Mummy's nose, Daddy's eyes)" },
  { id: 's8.understanding.03', step: 8, sub: 'understanding', text: 'Understands approximately 50 words' },
  { id: 's8.understanding.04', step: 8, sub: 'understanding', text: "Picks out two or more objects from a group of four (e.g. 'give me the cup and the doll', 'where's the...?')" },
  { id: 's8.understanding.05', step: 8, sub: 'understanding', text: "Understands familiar action words (e.g. 'sit down', 'come here', 'stop that')" },
  { id: 's8.understanding.06', step: 8, sub: 'understanding', text: 'Understands simple questions/directions (e.g. get your shoes, where is your coat?)' },
  { id: 's8.understanding.07', step: 8, sub: 'understanding', text: "Follows directions during play (e.g. 'feed teddy')" },

  { id: 's8.expression.01', step: 8, sub: 'expression', text: 'Joins in nursery rhymes and songs', split: true },
  { id: 's8.expression.02', step: 8, sub: 'expression', text: "Copies familiar expressions such as 'Oh dear', 'all fall down'", split: true },
  { id: 's8.expression.03', step: 8, sub: 'expression', text: 'Uses a mixture of words/vocalisation and/or sign/gesture to accompany play', split: true },
  { id: 's8.expression.04', step: 8, sub: 'expression', text: "Uses up to 20 words/signs: names things and people; comments on what's happening; tells someone something; responds to adult's questions or comments; protests; expresses likes and dislikes; describes actions", split: true, summary: true },
  { id: 's8.expression.05', step: 8, sub: 'expression', text: 'Names pictures of common objects when pointed to', split: true },
  { id: 's8.expression.06', step: 8, sub: 'expression', text: "Joins in simple narrative by answering questions about things that are very familiar (e.g. 'What goes on your feet?' Child answers 'Shoes'), or by filling in the gaps - 'Let's put on your...' - child fills in 'shoes'", split: true },
  { id: 's8.expression.07', step: 8, sub: 'expression', text: "Begins to make little sentences by joining two words/signs together (e.g. daddy gone)", split: true, summary: true },

  { id: 's8.speech.01', step: 8, sub: 'speech', text: "Continues to use simplified versions of words (e.g. 'goggy' for 'dog')" },
  { id: 's8.speech.02', step: 8, sub: 'speech', text: 'Imitates intonation of what s/he hears' },
  { id: 's8.speech.03', step: 8, sub: 'speech', text: 'Imitates words by copying some speech sounds and the correct number of syllables' },
  { id: 's8.speech.04', step: 8, sub: 'speech', text: 'Talks to self continuously when playing, although this may not be readily understood by adults' },
  { id: 's8.speech.05', step: 8, sub: 'speech', text: 'Produces several words recognisable to family members' },
  { id: 's8.speech.06', step: 8, sub: 'speech', text: 'Uses a wider range of vowel sounds in words: e.g. /ea/ as in beat, /ai/ as in bait, /oo/ as in boot' },
  { id: 's8.speech.07', step: 8, sub: 'speech', text: 'Uses a range of consonant sounds in words including: /p/, /d/, /b/, /t/, /g/, /n/, /m/, /w/, /h/', summary: true },

  { id: 's8.se_understanding.01', step: 8, sub: 'se_understanding', text: 'Seeks to be the centre of attention', summary: true },
  { id: 's8.se_understanding.02', step: 8, sub: 'se_understanding', text: 'May intentionally hurt another person if angry (e.g. may hit another child if they take a toy away)' },
  { id: 's8.se_understanding.03', step: 8, sub: 'se_understanding', text: 'May have a tantrum if frustrated or misunderstood', summary: true },
  { id: 's8.se_understanding.04', step: 8, sub: 'se_understanding', text: 'Shows embarrassment', summary: true },

  { id: 's8.attachment.01', step: 8, sub: 'attachment', text: 'Alternates between clinging and resistance to familiar adult', summary: true },
  { id: 's8.attachment.02', step: 8, sub: 'attachment', text: "Demonstrates sense of self as an individual (e.g. wants to do things independently, says 'no' to adult etc.)", summary: true },
  { id: 's8.attachment.03', step: 8, sub: 'attachment', text: 'Clings for affection when tired or afraid' },

  { id: 's8.cognition.01', step: 8, sub: 'cognition', text: 'Tries to work out problems by thinking first (e.g. how to switch something on or how to get something out of reach)', summary: true },
  { id: 's8.cognition.02', step: 8, sub: 'cognition', text: 'Is able to infer simple causes of happenings (e.g. straightens up a tower of blocks if it starts to wobble)' },
  { id: 's8.cognition.03', step: 8, sub: 'cognition', text: 'Operates mechanical toys (e.g. turns the knob on a wind up toy, pulls back on a friction car)' },
  { id: 's8.cognition.04', step: 8, sub: 'cognition', text: 'Discriminates between circle and square on a puzzle (i.e. looks at shape of piece and shapes on board and fits them together correctly)', summary: true },
  { id: 's8.cognition.05', step: 8, sub: 'cognition', text: 'Fits large, simple puzzle pieces into inset puzzles' },
  { id: 's8.cognition.06', step: 8, sub: 'cognition', text: 'Recognises familiar adult in picture' },
  { id: 's8.cognition.07', step: 8, sub: 'cognition', text: 'Recognises self in mirror or photo (e.g. if looks in mirror with dirt/food on face, tries to wipe it off or points to self in photo when asked)', summary: true },
  { id: 's8.cognition.08', step: 8, sub: 'cognition', text: 'Anticipates what might happen next because of what other people say/sign' },

  { id: 's8.play.01', step: 8, sub: 'play', text: "Imitates everyday actions in pretend play (e.g. brushing doll's hair, making beds, tasting food, cleaning dolls house, getting in the car, shopping)" },
  { id: 's8.play.02', step: 8, sub: 'play', text: 'Likes to put objects together (e.g. puts cups on saucers, spoon in a bowl, doll in the bed)' },
  { id: 's8.play.03', step: 8, sub: 'play', text: "Repeats same pretend actions to more than one person (e.g. gives Mum and Grandma 'tea' to drink from an empty cup)" },
  { id: 's8.play.04', step: 8, sub: 'play', text: 'Makes a pretend sequence (e.g. pouring pretend tea then drinking; washing then drying a doll; getting in the car and going to work)', summary: true },
  { id: 's8.play.05', step: 8, sub: 'play', text: 'Fills and empties containers' },
  { id: 's8.play.06', step: 8, sub: 'play', text: 'Enjoys building with blocks' },
  { id: 's8.play.07', step: 8, sub: 'play', text: 'Will pause and wait for turn in play with others with support' },
  { id: 's8.play.08', step: 8, sub: 'play', text: 'Spends time in groups of other children engaged in own play, but watching the other children', summary: true },

  { id: 's8.large.01', step: 8, sub: 'large', text: 'Runs without bumping into obstacles', summary: true },
  { id: 's8.large.02', step: 8, sub: 'large', text: 'Climbs onto and down from furniture without help' },
  { id: 's8.large.03', step: 8, sub: 'large', text: 'Squats down to pick up toy from floor' },
  { id: 's8.large.04', step: 8, sub: 'large', text: 'Walks up and down stairs holding on, putting two feet on each step (with supervision)', summary: true },
  { id: 's8.large.05', step: 8, sub: 'large', text: 'Throws small ball overhand' },
  { id: 's8.large.06', step: 8, sub: 'large', text: "'Walks into' large ball when trying to kick it" },
  { id: 's8.large.07', step: 8, sub: 'large', text: 'Sits on small tricycle, moving it with feet pushing on floor' },

  { id: 's8.fine.01', step: 8, sub: 'fine', text: 'Builds a tower of up to six blocks' },
  { id: 's8.fine.02', step: 8, sub: 'fine', text: 'Holds pencil near point with tripod grip (between thumb and two fingers)', summary: true },
  { id: 's8.fine.03', step: 8, sub: 'fine', text: 'Threads large beads onto firm cord, stick or pipe cleaner', summary: true },
  { id: 's8.fine.04', step: 8, sub: 'fine', text: 'Imitates drawing vertical lines' },
  { id: 's8.fine.05', step: 8, sub: 'fine', text: 'Imitates circular scribble' },

  { id: 's8.vision.01', step: 8, sub: 'vision', text: 'Shows sustained interest in looking at pictures/books with adults' },
  { id: 's8.vision.02', step: 8, sub: 'vision', text: 'Can visually scan the environment more quickly so trips over objects less often', summary: true },

  { id: 's8.feeding.01', step: 8, sub: 'feeding', text: 'Takes spoon from plate to mouth with some spilling', summary: true },
  { id: 's8.feeding.02', step: 8, sub: 'feeding', text: 'Inserts spoon in mouth without turning it upside down' },
  { id: 's8.feeding.03', step: 8, sub: 'feeding', text: 'Accepting of new textures and tastes - larger pieces of food and increasing range' },

  { id: 's8.sleeping.01', step: 8, sub: 'sleeping', text: 'Participates in bedtime routine (e.g. fetching pyjamas, requesting favourite story)', summary: true },

  { id: 's8.washing.01', step: 8, sub: 'washing', text: 'Takes part in washing (e.g. rubs hands and body with soap, puts under water to rinse)', summary: true },

  { id: 's8.dressing.01', step: 8, sub: 'dressing', text: 'Puts on hat and slip on shoes', summary: true },
  { id: 's8.dressing.02', step: 8, sub: 'dressing', text: "Plays 'dressing up' games" },
  { id: 's8.dressing.03', step: 8, sub: 'dressing', text: 'Unzips front zipper on coat/jacket' },
  { id: 's8.dressing.04', step: 8, sub: 'dressing', text: 'Helps take coat off' },

  { id: 's8.toileting.01', step: 8, sub: 'toileting', text: 'Shows awareness of what toilet/potty is used for', summary: true },

  /* ============================ STEP 9 ============================ */

  { id: 's9.attention.01', step: 9, sub: 'attention', text: "Frequently repeats words/signs s/he hears/sees - one or more key words repeated" },
  { id: 's9.attention.02', step: 9, sub: 'attention', text: 'Listens with interest to the noises adults make when they read stories' },
  { id: 's9.attention.03', step: 9, sub: 'attention', text: 'Recognises and joins in with songs and actions, (e.g. Wheels on the bus)', summary: true },
  { id: 's9.attention.04', step: 9, sub: 'attention', text: 'Listens to and carries out simple directions' },
  { id: 's9.attention.05', step: 9, sub: 'attention', text: "Picks out a familiar sound even when there is background noise (e.g. 'Dinnertime', 'No!', 'Stop now')" },

  { id: 's9.understanding.01', step: 9, sub: 'understanding', text: "Responds appropriately to 'Where's mummy/daddy?' if parents are not present" },
  { id: 's9.understanding.02', step: 9, sub: 'understanding', text: 'Recognises common objects and pictures' },
  { id: 's9.understanding.03', step: 9, sub: 'understanding', text: "Understands more complex sentences (e.g. 'Put your toys away and we'll read a book')", summary: true },
  { id: 's9.understanding.04', step: 9, sub: 'understanding', text: "Understands 'who', 'what', 'where' in simple questions" },

  { id: 's9.expression.01', step: 9, sub: 'expression', text: 'Rapid growth in expressive vocabulary - at least 50 words/signs and becoming more difficult for parents to keep track of new words/signs', split: true, summary: true },
  { id: 's9.expression.02', step: 9, sub: 'expression', text: 'Points to and names simple pictures', split: true },
  { id: 's9.expression.03', step: 9, sub: 'expression', text: "Combines words/signs into phrases (e.g. 'daddy come', 'there it is', 'play with car', 'me got one')", split: true },
  { id: 's9.expression.04', step: 9, sub: 'expression', text: "Uses 'me' to refer to self", split: true },
  { id: 's9.expression.05', step: 9, sub: 'expression', text: 'Asks simple questions using speech/sign with quizzical face', split: true },
  { id: 's9.expression.06', step: 9, sub: 'expression', text: "Starts to know his/her own mind and expresses this through action, gesture, sign or spoken words (e.g. 'no want bath', 'no go bed')", split: true, summary: true },
  { id: 's9.expression.07', step: 9, sub: 'expression', text: 'Talks aloud and/or signs when playing with others', split: true },
  { id: 's9.expression.08', step: 9, sub: 'expression', text: 'Says/signs please with prompts', split: true },
  { id: 's9.expression.09', step: 9, sub: 'expression', text: 'Says/signs thank you with prompts', split: true },
  { id: 's9.expression.10', step: 9, sub: 'expression', text: 'Uses words/signs to alert adults to needs (hungry, thirsty, tired etc.)', split: true },

  { id: 's9.speech.01', step: 9, sub: 'speech', text: "Tries to repeat many things adults say either saying the actual word or making a close match (e.g. 'um-beya' for umbrella)", summary: true },
  { id: 's9.speech.02', step: 9, sub: 'speech', text: 'Majority of words are intelligible to unfamiliar listeners' },
  { id: 's9.speech.03', step: 9, sub: 'speech', text: 'Uses a variety of consonant sounds in speech - /p/, /m/, /h/, /n/, /w/, /b/, /k/, /g/, /d/, /t/' },

  { id: 's9.se_understanding.01', step: 9, sub: 'se_understanding', text: 'Defends own possessions', summary: true },
  { id: 's9.se_understanding.02', step: 9, sub: 'se_understanding', text: "Understands causes of some feelings (e.g. feel sad because a toy is broken, feel frustrated because can't go outside to play)", summary: true },
  { id: 's9.se_understanding.03', step: 9, sub: 'se_understanding', text: "Conscious of adult approval or disapproval for his/her actions (e.g. checks to see if adult is looking before being naughty, looks guilty if 'caught in the act')", summary: true },
  { id: 's9.se_understanding.04', step: 9, sub: 'se_understanding', text: 'Knows own mind and expresses it (e.g. objects to having bath, getting dressed, going to bed)' },

  { id: 's9.attachment.01', step: 9, sub: 'attachment', text: 'Responds positively to a variety of familiar carers' },
  { id: 's9.attachment.02', step: 9, sub: 'attachment', text: 'Demonstrates concern for others when they are upset (e.g. offers favourite toy, pats arm or back, offers cuddle etc.)', summary: true },
  { id: 's9.attachment.03', step: 9, sub: 'attachment', text: 'Searches out adult when hurt or distressed', summary: true },

  { id: 's9.cognition.01', step: 9, sub: 'cognition', text: 'Recognises and anticipates everyday routines (e.g. looks for coat or gets in buggy when adult is getting ready to go out)' },
  { id: 's9.cognition.02', step: 9, sub: 'cognition', text: 'Displays curiosity in the world by asking questions about (using words or signs), and looking intently at objects, events and people', summary: true },
  { id: 's9.cognition.03', step: 9, sub: 'cognition', text: "Remembers a sequence of activities and events - i.e. 'tells' parents what s/he has done or seen (e.g. 'Mummy train ice-cream')", summary: true },
  { id: 's9.cognition.04', step: 9, sub: 'cognition', text: "Matches sets of identical objects - developing understanding of the concept of 'the same'", summary: true },
  { id: 's9.cognition.05', step: 9, sub: 'cognition', text: 'Able to imitate actions in play a while after s/he has seen them demonstrated' },

  { id: 's9.play.01', step: 9, sub: 'play', text: 'Imitates longer sequences in play (e.g. copies adult pouring tea, putting in sugar, stirring, then giving to doll)' },
  { id: 's9.play.02', step: 9, sub: 'play', text: 'Is more organised, gathering together the toys s/he wants to play with before starting play (e.g. getting the doll and the tea set before s/he starts to play tea-parties; getting the train and tracks and setting them out before playing trains)', summary: true },
  { id: 's9.play.03', step: 9, sub: 'play', text: 'Uses one object to represent another in pretend play (e.g. uses a lid as a cup, brick as a car, puts block on a plate as if it is a cake)', summary: true },
  { id: 's9.play.04', step: 9, sub: 'play', text: "Enjoys dressing up (e.g. putting on hats, daddy's shoes, dressing up as favourite character in story or on TV)" },
  { id: 's9.play.05', step: 9, sub: 'play', text: 'Plays lots of interactive games with adult or older child, often involving running or chasing' },
  { id: 's9.play.06', step: 9, sub: 'play', text: 'Plays alongside other children and occasionally allows them into play (e.g. hands toys to them)', summary: true },
  { id: 's9.play.07', step: 9, sub: 'play', text: 'Copies the actions and sequences of play of other children' },
  { id: 's9.play.08', step: 9, sub: 'play', text: 'Plays with play dough and makes different shapes - will tell you what they have made' },

  { id: 's9.large.01', step: 9, sub: 'large', text: 'Runs safely on whole foot, stopping and starting with ease and avoiding obstacles', summary: true },
  { id: 's9.large.02', step: 9, sub: 'large', text: 'Squats with steadiness to rest or play with object on the ground - rises to feet without using hands' },
  { id: 's9.large.03', step: 9, sub: 'large', text: 'Stands on one foot while kicking ball with other foot', summary: true },
  { id: 's9.large.04', step: 9, sub: 'large', text: 'Can catch a ball when sitting' },

  { id: 's9.fine.01', step: 9, sub: 'fine', text: 'Picks up tiny objects accurately/quickly using pincer grip', summary: true },
  { id: 's9.fine.02', step: 9, sub: 'fine', text: 'Builds tower of up to seven cubes' },
  { id: 's9.fine.03', step: 9, sub: 'fine', text: 'Places objects down neatly and precisely' },
  { id: 's9.fine.04', step: 9, sub: 'fine', text: 'Turns pages in a book one at a time' },
  { id: 's9.fine.05', step: 9, sub: 'fine', text: "Scribble writes including 'V' shape and vertical lines" },
  { id: 's9.fine.06', step: 9, sub: 'fine', text: 'Fits square shapes into a formboard' },
  { id: 's9.fine.07', step: 9, sub: 'fine', text: 'Fits smaller shapes and objects into holes during posting activities' },
  { id: 's9.fine.08', step: 9, sub: 'fine', text: 'Threads large beads onto floppier cord (e.g. washing line cord, heavy shoelace)' },
  { id: 's9.fine.09', step: 9, sub: 'fine', text: 'Makes snips in paper with child scissors', summary: true },

  { id: 's9.vision.01', step: 9, sub: 'vision', text: 'Scans pages and looks at books studying each picture for details', summary: true },

  { id: 's9.feeding.01', step: 9, sub: 'feeding', text: 'Searches for food when hungry' },
  { id: 's9.feeding.02', step: 9, sub: 'feeding', text: 'Feeds self competently with spoon', summary: true },
  { id: 's9.feeding.03', step: 9, sub: 'feeding', text: 'Drinks well without spilling', summary: true },
  { id: 's9.feeding.04', step: 9, sub: 'feeding', text: 'Replaces cup on table without difficulty' },

  { id: 's9.dressing.01', step: 9, sub: 'dressing', text: 'Puts on hat independently' },
  { id: 's9.dressing.02', step: 9, sub: 'dressing', text: 'Puts on shoes independently - may not get the right feet or do them up' },
  { id: 's9.dressing.03', step: 9, sub: 'dressing', text: 'Takes off loose coat or shirt when undone', summary: true },

  { id: 's9.toileting.01', step: 9, sub: 'toileting', text: 'Indicates need for toilet by behaviour (e.g. dancing movements, holding self)', summary: true },
  { id: 's9.toileting.02', step: 9, sub: 'toileting', text: 'Tolerates sitting on potty or toilet', summary: true },

  { id: 's9.independence.01', step: 9, sub: 'independence', text: 'Takes part in familiar routines with help (e.g. dusting, setting table, wiping table etc.)' },
  { id: 's9.independence.02', step: 9, sub: 'independence', text: 'Enjoys responsibility of carrying out small tasks (e.g. carrying a bag for Mum)', summary: true },

  /* ============================ STEP 10 ============================ */

  { id: 's10.attention.01', step: 10, sub: 'attention', text: 'Recognises and responds to many familiar sounds, (e.g. child responds to knock on the door by turning/looking at/going to the door)' },
  { id: 's10.attention.02', step: 10, sub: 'attention', text: "Listens to music and responds when it's turned off (e.g. stops singing or dancing, turns to look at the stereo)" },
  { id: 's10.attention.03', step: 10, sub: 'attention', text: "Fills in the missing word or phrase (using speech or sign) in a known rhyme, story retell or game (e.g. 'Humpty Dumpty sat on a ...')", summary: true },
  { id: 's10.attention.04', step: 10, sub: 'attention', text: 'Notices a deliberate mistake in story telling or a rhyme' },
  { id: 's10.attention.05', step: 10, sub: 'attention', text: 'Remembers 3-4 items shown on a visually represented list (e.g. picture shopping list of apples, oranges, bananas)' },
  { id: 's10.attention.06', step: 10, sub: 'attention', text: 'Remembers a spoken list of three objects or names (no visual clues)' },

  { id: 's10.understanding.01', step: 10, sub: 'understanding', text: "Responds appropriately to simple two-part instructions or requests (e.g. 'Get your shoes and put on your coat', 'Pick up the ball and give it to mummy')" },
  { id: 's10.understanding.02', step: 10, sub: 'understanding', text: "Identifies action words by pointing to the right picture (e.g. 'Who's jumping?')" },
  { id: 's10.understanding.03', step: 10, sub: 'understanding', text: "Shows understanding of prepositions 'in', and 'on' (e.g. by carrying out action 'Put dolly in the box' or selecting correct picture)", summary: true },
  { id: 's10.understanding.04', step: 10, sub: 'understanding', text: 'Will point to smaller parts of the body (e.g. chin, elbow, eyebrow) when asked to do so' },

  { id: 's10.expression.01', step: 10, sub: 'expression', text: "Uses longer sentences of three to four words/signs (e.g. 'mummy go shops now')", split: true, summary: true },
  { id: 's10.expression.02', step: 10, sub: 'expression', text: 'Uses words/signs to ask and find out about things', split: true },
  { id: 's10.expression.03', step: 10, sub: 'expression', text: 'Uses words/signs during play and almost all activities', split: true },
  { id: 's10.expression.04', step: 10, sub: 'expression', text: 'Uses words/signs to ask for help (e.g. washing hands, going to the toilet)', split: true },
  { id: 's10.expression.05', step: 10, sub: 'expression', text: "Answers simple questions (e.g. 'where's Mum?')", split: true, summary: true },
  { id: 's10.expression.06', step: 10, sub: 'expression', text: "Uses several pronouns correctly - 'I', 'me', 'you'", split: true },
  { id: 's10.expression.07', step: 10, sub: 'expression', text: "Indicates 'no' through gestures/signs or speech", split: true },
  { id: 's10.expression.08', step: 10, sub: 'expression', text: 'Uses 10-15 action words/signs (e.g. eat, drink, sleep, wash, play, finish)', split: true },
  { id: 's10.expression.09', step: 10, sub: 'expression', text: "Uses words/signs to describe things (e.g. 'it's wet', 'it's too hot')", split: true },
  { id: 's10.expression.10', step: 10, sub: 'expression', text: 'Uses over 200 words and/or signs', split: true },

  { id: 's10.speech.01', step: 10, sub: 'speech', text: 'Uses appropriate intonation to ask questions' },
  { id: 's10.speech.02', step: 10, sub: 'speech', text: 'Talks aloud to self when playing alone' },
  { id: 's10.speech.03', step: 10, sub: 'speech', text: 'Speaks with a loud voice' },
  { id: 's10.speech.04', step: 10, sub: 'speech', text: 'Has a sing-song quality to speech that adds to expression/meaning' },
  { id: 's10.speech.05', step: 10, sub: 'speech', text: 'Produces 6-8 consonant sounds in words (e.g. /p/, /b/, /t/, /d/, /k/, /g/, /m/, /n/, /w/)' },
  { id: 's10.speech.06', step: 10, sub: 'speech', text: 'Produces a wide range of vowels more accurately in words, e.g. /ou/ as in bout, /ea/ as in bear, /ou/ as in bought, /oa/ as in boat' },
  { id: 's10.speech.07', step: 10, sub: 'speech', text: 'Familiar adults understand speech when words are joined into sentences', summary: true },

  { id: 's10.se_understanding.01', step: 10, sub: 'se_understanding', text: 'Is curious about others and will modify behaviour to fit in with what others are doing (e.g. removing shoes and socks before going on slide after seeing others doing this)', summary: true },
  { id: 's10.se_understanding.02', step: 10, sub: 'se_understanding', text: 'Likes to perform for others' },
  { id: 's10.se_understanding.03', step: 10, sub: 'se_understanding', text: 'Identifies self with children of same age and sex' },
  { id: 's10.se_understanding.04', step: 10, sub: 'se_understanding', text: 'Prefers familiar routines to stay the same. May object to major changes in routine', summary: true },

  { id: 's10.attachment.01', step: 10, sub: 'attachment', text: "Is jealous of sharing parents' attention", summary: true },
  { id: 's10.attachment.02', step: 10, sub: 'attachment', text: 'Shows affection and concern for other children and younger siblings', summary: true },
  { id: 's10.attachment.03', step: 10, sub: 'attachment', text: 'Shy with strangers, especially adults - may hide against parent when introduced', summary: true },

  { id: 's10.cognition.01', step: 10, sub: 'cognition', text: 'Waits when asked to', summary: true },
  { id: 's10.cognition.02', step: 10, sub: 'cognition', text: "Will imitate unfamiliar ways of behaving when these seem appropriate to them (e.g. takes off shoes and socks to join in 'feet painting' at nursery if sees other children doing this)" },
  { id: 's10.cognition.03', step: 10, sub: 'cognition', text: "Begins to develop sense of time (i.e. understands terms such as 'later', 'tomorrow' and 'yesterday')" },
  { id: 's10.cognition.04', step: 10, sub: 'cognition', text: "Uses and understands 'if...then' logic (e.g. If I stand on a chair, then I can reach the toy; If I eat my sandwich, then I can have some chocolate pudding etc.)" },
  { id: 's10.cognition.05', step: 10, sub: 'cognition', text: 'Understands simple explanations and reasons given by others' },
  { id: 's10.cognition.06', step: 10, sub: 'cognition', text: 'May invent imaginary person and treat as a friend' },
  { id: 's10.cognition.07', step: 10, sub: 'cognition', text: 'Demonstrates some understanding of quantity, (e.g. take one biscuit, there are many blocks etc.)' },
  { id: 's10.cognition.08', step: 10, sub: 'cognition', text: 'Understands size differences - big, small etc. (e.g. selects the big or small object/picture when asked)', summary: true },
  { id: 's10.cognition.09', step: 10, sub: 'cognition', text: 'Matches simple shapes (circle, square, triangle)' },
  { id: 's10.cognition.10', step: 10, sub: 'cognition', text: 'Matches simple pictures of familiar objects (e.g. spoon, dog, banana, shoes etc.)', summary: true },
  { id: 's10.cognition.11', step: 10, sub: 'cognition', text: 'Matches objects to pictures (e.g. matches real shoe to a picture of a shoe)' },
  { id: 's10.cognition.12', step: 10, sub: 'cognition', text: 'Fits 3-4 nesting cups together, showing understanding of size differences and how they fit together' },
  { id: 's10.cognition.13', step: 10, sub: 'cognition', text: 'Completes a 2-4 piece puzzle' },
  { id: 's10.cognition.14', step: 10, sub: 'cognition', text: 'Self-corrects during an activity without adult prompting (e.g. tries to fit a puzzle piece in the wrong space, then changes to the right space)' },

  { id: 's10.play.01', step: 10, sub: 'play', text: "Uses other people's belongings in pretend play (e.g. Mum's bag and brush)" },
  { id: 's10.play.02', step: 10, sub: 'play', text: 'Creates imaginary objects, characters and scenes in play (e.g. talks to an imaginary shopper as if s/he is the shop assistant)', summary: true },
  { id: 's10.play.03', step: 10, sub: 'play', text: "Adopts voice or manner of another person or animal in play (e.g. moves like a cat and 'miaows')" },
  { id: 's10.play.04', step: 10, sub: 'play', text: 'Includes another child in their play sequence and may talk to them as does so (e.g. gives child a cup to drink from)', summary: true },
  { id: 's10.play.05', step: 10, sub: 'play', text: "Shares books with adult or other child, making 'comments' about the events and pictures" },
  { id: 's10.play.06', step: 10, sub: 'play', text: 'Builds a simple bridge using blocks' },
  { id: 's10.play.07', step: 10, sub: 'play', text: 'Participates in creative activities, telling you what s/he has made (e.g. using dough, paint, blocks, cutting and pasting, cooking, drawing, making music/sounds)' },

  { id: 's10.large.01', step: 10, sub: 'large', text: 'Pushes and pulls large toys - has difficulty steering around obstacles' },
  { id: 's10.large.02', step: 10, sub: 'large', text: 'Jumps with two feet together from floor', summary: true },
  { id: 's10.large.03', step: 10, sub: 'large', text: 'Can stand on tiptoe when holding onto something' },
  { id: 's10.large.04', step: 10, sub: 'large', text: 'Can kick and catch a large ball', summary: true },
  { id: 's10.large.05', step: 10, sub: 'large', text: 'Climbs confidently - beginning to use nursery play climbing equipment' },

  { id: 's10.fine.01', step: 10, sub: 'fine', text: 'Can build a tower of seven or more cubes', summary: true },
  { id: 's10.fine.02', step: 10, sub: 'fine', text: 'Imitates drawing a simple face (circle for head, with eyes, nose and mouth)', summary: true },
  { id: 's10.fine.03', step: 10, sub: 'fine', text: 'Folds paper in half' },
  { id: 's10.fine.04', step: 10, sub: 'fine', text: 'Uses one hand more than the other (i.e. shows a preference for right or left)' },
  { id: 's10.fine.05', step: 10, sub: 'fine', text: 'Turns rotating handles' },
  { id: 's10.fine.06', step: 10, sub: 'fine', text: 'Screws and unscrews jar lids, nuts and bolts' },
  { id: 's10.fine.07', step: 10, sub: 'fine', text: 'Fits round, square and triangle shapes into a puzzle and posting box', summary: true },
  { id: 's10.fine.08', step: 10, sub: 'fine', text: 'Puts tiny objects into small container' },

  { id: 's10.vision.01', step: 10, sub: 'vision', text: 'Watches and observes people carefully' },

  { id: 's10.feeding.01', step: 10, sub: 'feeding', text: "Eats more carefully, aware of social expectations at mealtimes (e.g. don't throw food, don't shout etc.)" },
  { id: 's10.feeding.02', step: 10, sub: 'feeding', text: 'Uses fork or other eating utensils where appropriate' },
  { id: 's10.feeding.03', step: 10, sub: 'feeding', text: 'Eats individual pieces of food from tub or box with lid (e.g. raisins, smarties etc.)', summary: true },
  { id: 's10.feeding.04', step: 10, sub: 'feeding', text: 'Able to blow (e.g. candles, cooling food, whistle, bubble pipe)', summary: true },

  { id: 's10.washing.01', step: 10, sub: 'washing', text: 'Helps to wash own body when in bath' },
  { id: 's10.washing.02', step: 10, sub: 'washing', text: 'Helps with washing own hair' },
  { id: 's10.washing.03', step: 10, sub: 'washing', text: 'Helps to dry self after bathing/hand washing', summary: true },
  { id: 's10.washing.04', step: 10, sub: 'washing', text: 'Uses taps on hand basin' },

  { id: 's10.dressing.01', step: 10, sub: 'dressing', text: 'Can undo large buttons and velcro fasteners' },
  { id: 's10.dressing.02', step: 10, sub: 'dressing', text: 'Removes shirt' },
  { id: 's10.dressing.03', step: 10, sub: 'dressing', text: "Removes 'pull-down' garments" },
  { id: 's10.dressing.04', step: 10, sub: 'dressing', text: 'Pulls up own trousers', summary: true },
  { id: 's10.dressing.05', step: 10, sub: 'dressing', text: 'Pulls zipper up once fastened at the bottom' },

  { id: 's10.toileting.01', step: 10, sub: 'toileting', text: 'Asks for toilet when needed using voice, gesture or action (e.g. leads adult to toilet, makes sign or asks verbally)', summary: true },
  { id: 's10.toileting.02', step: 10, sub: 'toileting', text: 'Mostly dry during the day with occasional accidents' },
  { id: 's10.toileting.03', step: 10, sub: 'toileting', text: 'Usually able to control bowel, occasional accidents' },
  { id: 's10.toileting.04', step: 10, sub: 'toileting', text: 'Pulls down own pants when using the toilet' },

  { id: 's10.independence.01', step: 10, sub: 'independence', text: 'Independently helps adults in everyday tasks (e.g. tidying up toys, putting cup on bench)', summary: true },

  /* ============================ STEP 11 ============================ */

  { id: 's11.attention.01', step: 11, sub: 'attention', text: 'Is able to follow directions (if not intently focused on own choice of activity)' },
  { id: 's11.attention.02', step: 11, sub: 'attention', text: 'Listens eagerly to stories and requests favourites over and over again' },
  { id: 's11.attention.03', step: 11, sub: 'attention', text: 'Notices if adult uses wrong language in familiar story' },
  { id: 's11.attention.04', step: 11, sub: 'attention', text: 'Concentrates and listens for more than 10 minutes in adult-lead activities that s/he enjoys', summary: true },
  { id: 's11.attention.05', step: 11, sub: 'attention', text: 'Looks at books independently' },
  { id: 's11.attention.06', step: 11, sub: 'attention', text: "Takes part in 'reading' by filling in words and phrases" },
  { id: 's11.attention.07', step: 11, sub: 'attention', text: "Recognises the tunes of familiar songs and rhymes and joins in (e.g. 'Happy birthday', 'Baa baa black sheep'...)" },
  { id: 's11.attention.08', step: 11, sub: 'attention', text: 'Remembers 3-4 items shown on a visually represented list (e.g. picture shopping list of apples, oranges, bananas)' },
  { id: 's11.attention.09', step: 11, sub: 'attention', text: 'Remembers a spoken list of three objects or names (no visual clues)' },

  { id: 's11.understanding.01', step: 11, sub: 'understanding', text: "Understands use of objects (e.g. 'What do we use to cut things with?')" },
  { id: 's11.understanding.02', step: 11, sub: 'understanding', text: 'Can identify picture or object with three critical elements (e.g. big girl jumping)', summary: true },
  { id: 's11.understanding.03', step: 11, sub: 'understanding', text: "Shows understanding of prepositions 'under', 'on top', 'behind', and 'next to' by carrying out action or selecting correct picture" },
  { id: 's11.understanding.04', step: 11, sub: 'understanding', text: "Understands objects by description (e.g. 'the wet one', 'the dirty one')" },
  { id: 's11.understanding.05', step: 11, sub: 'understanding', text: "Understands all pronouns (e.g. 'they', 'he/she', 'him/her')" },
  { id: 's11.understanding.06', step: 11, sub: 'understanding', text: 'Knows when to wait while others are talking (i.e. can control the urge to butt in)' },
  { id: 's11.understanding.07', step: 11, sub: 'understanding', text: "Provides appropriate information in response to 'what' and 'where' questions" },

  { id: 's11.expression.01', step: 11, sub: 'expression', text: 'Retells a simple past event in correct order (e.g. went down slide, hurt finger)', split: true },
  { id: 's11.expression.02', step: 11, sub: 'expression', text: 'Gives information about own life and favourite things', split: true },
  { id: 's11.expression.03', step: 11, sub: 'expression', text: "Answers 'yes/no' questions appropriately", split: true },
  { id: 's11.expression.04', step: 11, sub: 'expression', text: "Uses a range of verb forms (e.g. 'play', 'playing', 'will play', 'played')" },
  { id: 's11.expression.05', step: 11, sub: 'expression', text: 'Asks increasingly detailed questions to find out information', split: true },
  { id: 's11.expression.06', step: 11, sub: 'expression', text: 'Answers questions more fully, providing more than one piece of information', split: true },
  { id: 's11.expression.07', step: 11, sub: 'expression', text: 'Uses words/signs for: giving reasons; saying what s/he wants; playing with others; directing others; telling others about things', split: true, summary: true },
  { id: 's11.expression.08', step: 11, sub: 'expression', text: "Uses plurals (e.g. 'cats')" },
  { id: 's11.expression.09', step: 11, sub: 'expression', text: "Uses possessives (e.g. 'the boy's teddy')" },
  { id: 's11.expression.10', step: 11, sub: 'expression', text: 'Retells a simple story - recalling events and characters', split: true },

  { id: 's11.speech.01', step: 11, sub: 'speech', text: 'Realises the correct volume to talk at (not too loud or quiet)' },
  { id: 's11.speech.02', step: 11, sub: 'speech', text: 'Likes saying learnt expressions such as name and age or address' },
  { id: 's11.speech.03', step: 11, sub: 'speech', text: 'Sings on own' },
  { id: 's11.speech.04', step: 11, sub: 'speech', text: 'Routinely uses speech alongside sign' },
  { id: 's11.speech.05', step: 11, sub: 'speech', text: 'Produces more than half of the consonant sounds accurately' },
  { id: 's11.speech.06', step: 11, sub: 'speech', text: "Produces some consonant blends (e.g. 'tr' in tree, 'bl' in blue)", summary: true },
  { id: 's11.speech.07', step: 11, sub: 'speech', text: 'Produces almost all vowel sounds accurately' },
  { id: 's11.speech.08', step: 11, sub: 'speech', text: "Starting to 'say' or 'sound' 2 and 3 syllables in words", summary: true },
  { id: 's11.speech.09', step: 11, sub: 'speech', text: 'Enjoys using a range of blowing toys (whistles, recorder, bubble blowers)' },

  { id: 's11.se_understanding.01', step: 11, sub: 'se_understanding', text: "Understands that own actions affect other people (e.g. becomes upset or tries to comfort another child if they realises they've upset them)", summary: true },
  { id: 's11.se_understanding.02', step: 11, sub: 'se_understanding', text: 'Generally more co-operative and amenable to family rules (fewer tantrums)', summary: true },
  { id: 's11.se_understanding.03', step: 11, sub: 'se_understanding', text: "Knows s/he cannot always have what s/he wants when s/he wants it" },
  { id: 's11.se_understanding.04', step: 11, sub: 'se_understanding', text: 'Is conscious of and curious about sex differences' },
  { id: 's11.se_understanding.05', step: 11, sub: 'se_understanding', text: 'Gets satisfaction from doing things with other people' },
  { id: 's11.se_understanding.06', step: 11, sub: 'se_understanding', text: 'More confident in new social situations, (e.g. playgroup), but may be anxious at first', summary: true },

  { id: 's11.attachment.01', step: 11, sub: 'attachment', text: 'Likes to sit, have a cuddle and share events of the day with a familiar adult', summary: true },
  { id: 's11.attachment.02', step: 11, sub: 'attachment', text: 'May form a special friendship with one child', summary: true },

  { id: 's11.cognition.01', step: 11, sub: 'cognition', text: 'Puts 3 pictures in correct order to represent sequence in familiar activity/story', summary: true },
  { id: 's11.cognition.02', step: 11, sub: 'cognition', text: 'Displays curiosity about the world by looking intently at objects events and people' },
  { id: 's11.cognition.03', step: 11, sub: 'cognition', text: 'Gives reasons for own actions' },
  { id: 's11.cognition.04', step: 11, sub: 'cognition', text: 'Understands consequences of own actions (e.g. if cup is knocked over the juice is spilt; if I throw the toys, Mum takes them away)', summary: true },
  { id: 's11.cognition.05', step: 11, sub: 'cognition', text: 'Shows awareness of danger (e.g. is more careful on playground equipment)' },
  { id: 's11.cognition.06', step: 11, sub: 'cognition', text: 'Drawings are more identifiable (e.g. draws a person with round shape for head and maybe two lines for legs)' },
  { id: 's11.cognition.07', step: 11, sub: 'cognition', text: 'Matches 2-3 primary colours (red, yellow, blue)', summary: true },
  { id: 's11.cognition.08', step: 11, sub: 'cognition', text: 'Matches objects by size' },
  { id: 's11.cognition.09', step: 11, sub: 'cognition', text: "Understands concept of 'two' (e.g. can give two blocks when asked)", summary: true },
  { id: 's11.cognition.10', step: 11, sub: 'cognition', text: 'Can rote count to 5 (if not yet speaking, may use finger pointing to indicate counting)' },
  { id: 's11.cognition.11', step: 11, sub: 'cognition', text: 'Knows whether someone is a boy or girl - but might still be getting them confused' },

  { id: 's11.play.01', step: 11, sub: 'play', text: 'Uses doll, teddy etc. as partner in play, talking to it and telling it what to do next' },
  { id: 's11.play.02', step: 11, sub: 'play', text: 'Uses one object to represent many different things (e.g. a scarf could be a blanket, a cloak, and a dress all during the same play sequence)' },
  { id: 's11.play.03', step: 11, sub: 'play', text: 'Imaginary play involves lots of detail and several linked actions (e.g. getting undressed, bathed, dressed in nightclothes, having a bedtime drink)' },
  { id: 's11.play.04', step: 11, sub: 'play', text: 'Dresses up as different people' },
  { id: 's11.play.05', step: 11, sub: 'play', text: "Builds 'stories' around toys (e.g. farm animals climbing an armchair 'cliff' and having to be rescued)" },
  { id: 's11.play.06', step: 11, sub: 'play', text: 'Uses construction materials as a means to an end (e.g. making road or house to be used as part of game) rather than as something simply to be explored' },
  { id: 's11.play.07', step: 11, sub: 'play', text: 'Understands s/he has to share (e.g. toys) but might not always be willing to do so', summary: true },
  { id: 's11.play.08', step: 11, sub: 'play', text: 'Joins in make-believe play with other children' },
  { id: 's11.play.09', step: 11, sub: 'play', text: 'Plays well with 2-3 children in a group', summary: true },

  { id: 's11.large.01', step: 11, sub: 'large', text: 'Walks upstairs using alternating feet, one foot per step' },
  { id: 's11.large.02', step: 11, sub: 'large', text: 'Walks downstairs two feet to each step while carrying a toy' },
  { id: 's11.large.03', step: 11, sub: 'large', text: 'Jumps down a single step' },
  { id: 's11.large.04', step: 11, sub: 'large', text: 'Negotiates obstacles when running and pushing toys', summary: true },
  { id: 's11.large.05', step: 11, sub: 'large', text: 'Walks backwards, forwards and sideways' },
  { id: 's11.large.06', step: 11, sub: 'large', text: 'Walks forward on a straight line' },
  { id: 's11.large.07', step: 11, sub: 'large', text: 'Rides tricycle using pedals', summary: true },
  { id: 's11.large.08', step: 11, sub: 'large', text: 'Can walk on tiptoe' },
  { id: 's11.large.09', step: 11, sub: 'large', text: 'Kicks ball forcibly' },
  { id: 's11.large.10', step: 11, sub: 'large', text: 'Can stand momentarily on one foot when shown' },

  { id: 's11.fine.01', step: 11, sub: 'fine', text: 'Can build tower of 10 or more cubes' },
  { id: 's11.fine.02', step: 11, sub: 'fine', text: 'Imitates making a train of cubes' },
  { id: 's11.fine.03', step: 11, sub: 'fine', text: 'Threads large beads onto shoelace' },
  { id: 's11.fine.04', step: 11, sub: 'fine', text: 'Holds pencil near point between first two fingers and thumb and uses it with good control' },
  { id: 's11.fine.05', step: 11, sub: 'fine', text: 'Cuts paper with scissors', summary: true },
  { id: 's11.fine.06', step: 11, sub: 'fine', text: "Writes an 'X' form and a horizontal line" },
  { id: 's11.fine.07', step: 11, sub: 'fine', text: 'Imitates drawing a circle', summary: true },
  { id: 's11.fine.08', step: 11, sub: 'fine', text: 'Draws spontaneous and unrecognisable forms' },
  { id: 's11.fine.09', step: 11, sub: 'fine', text: 'Draws person with head and one or two other features/parts' },

  { id: 's11.vision.01', step: 11, sub: 'vision', text: 'Compares sizes of objects', summary: true },

  { id: 's11.feeding.01', step: 11, sub: 'feeding', text: 'Helps to set the table for family meals' },
  { id: 's11.feeding.02', step: 11, sub: 'feeding', text: 'Pours drink from jug with some spillage' },
  { id: 's11.feeding.03', step: 11, sub: 'feeding', text: 'Eats with a fork and spoon', summary: true },
  { id: 's11.feeding.04', step: 11, sub: 'feeding', text: 'Beginning to use a knife for spreading' },

  { id: 's11.washing.01', step: 11, sub: 'washing', text: 'Washes and dries own hands', summary: true },
  { id: 's11.washing.02', step: 11, sub: 'washing', text: 'Dries face with help' },
  { id: 's11.washing.03', step: 11, sub: 'washing', text: 'Turns taps on and off' },
  { id: 's11.washing.04', step: 11, sub: 'washing', text: 'Brushes teeth with support' },
  { id: 's11.washing.05', step: 11, sub: 'washing', text: 'Blows nose when tissue is held up' },

  { id: 's11.dressing.01', step: 11, sub: 'dressing', text: 'Puts arms into open fronted coat or shirt when held up', summary: true },
  { id: 's11.dressing.02', step: 11, sub: 'dressing', text: 'Hangs up own coat' },
  { id: 's11.dressing.03', step: 11, sub: 'dressing', text: 'Finds items of clothing in the bedroom' },

  { id: 's11.toileting.01', step: 11, sub: 'toileting', text: 'Reliably clean and dry during the day', summary: true },
  { id: 's11.toileting.02', step: 11, sub: 'toileting', text: 'Knows difference between bladder and bowel functions and communicates this' },
  { id: 's11.toileting.03', step: 11, sub: 'toileting', text: 'Flushes toilet with help' },
  { id: 's11.toileting.04', step: 11, sub: 'toileting', text: 'Waits to be wiped after using toilet or potty' },

  { id: 's11.independence.01', step: 11, sub: 'independence', text: 'Asks for help/support when needed', summary: true }
];

/* --------------------------------------------------------------------
   All 11 Steps are complete. This export is kept (empty) as the place
   to record any future gap honestly, rather than removing the concept
   entirely - if a correction is ever needed mid-edit, note it here
   before content is confirmed complete again.
   -------------------------------------------------------------------- */
export const _incomplete = {};

/* Convenience lookups ------------------------------------------------ */

export const STEPS_AVAILABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/* --------------------------------------------------------------------
   GLOSSARY - terms shown in blue in the printed journal. Keyed by term
   for easy lookup/highlighting in the UI.
   -------------------------------------------------------------------- */
export const GLOSSARY = [
  { term: 'adjective', def: 'a describing word or sign, e.g. big, wet, dirty' },
  { term: 'anticipation', def: 'the feeling of looking forward or expecting that something is going to happen' },
  { term: 'anticipation games', def: "short sequence games that are played so frequently that a child begins to know what to expect next in the routine, often drawn from daily activities or nursery rhymes, e.g. 'peek-a-boo', 'round and round the garden'" },
  { term: 'attachment', def: 'the bond or relationship developed between parents/carers and their child' },
  { term: 'attend', def: 'to pay attention to someone or something so that one might detect an auditory, visual or tactile stimuli' },
  { term: 'babble', def: "repetitive sequences of consonant-vowel syllable-like vocalisations, e.g. 'dadada'" },
  { term: 'child directed speech', def: 'the changes adults make when communicating with babies and small children, e.g. using a higher pitch of voice; using more varied intonation and facial expression; using short, repetitive sentences; using larger, slower and more repetitive signs' },
  { term: 'chronological age', def: "someone's real age, beginning at the day they were born" },
  { term: 'cognitive development', def: 'the processes involved in thinking, reasoning, learning, processing and remembering information' },
  { term: 'communication', def: 'the way we tell someone what we mean using language, our voice, our face and our body' },
  { term: 'consonant blends', def: "sounds made with two or three consonants together e.g. 'tr' as in 'tree, 'cl' as in 'clear', 'str' as in string" },
  { term: 'consonant sounds', def: 'a speech sound formed by restricting, channelling, or directing air flow with the tongue, teeth, and/or lips, e.g. th, s, f, g, t, p, m etc.' },
  { term: 'critical elements', def: "essential information-giving parts of a sentence or phrase e.g. in the sentence the teddy is sleeping, the critical elements are 'teddy' and 'sleeping'" },
  { term: 'cruising', def: 'pulling up to standing against a piece of furniture or an object, and lifting one foot walking sideways while holding on' },
  { term: 'emotions', def: 'feelings such as happiness and anger' },
  { term: 'engagement', def: 'a close, emotional form of reciprocal interaction between babies and their carers when the baby is interested, alert and participating in the interaction' },
  { term: 'expressive language', def: 'words or signs that are used by the child and combined into phrases or sentences' },
  { term: 'expressive vocabulary', def: 'single words or signs that are used in the production of language' },
  { term: 'eye contact', def: 'when two people look into each other\u2019s eyes' },
  { term: 'facial expression', def: 'the changes we make to our faces by widening the eyes, opening the mouth, smiling etc.' },
  { term: 'fricatives', def: 'speech sounds that have restricted, channelled and turbulent air flow, such as f and th' },
  { term: 'gesture', def: 'motions of the hands, head or body' },
  { term: 'hand-eye co-ordination', def: 'ability to see a desired object, and then reach out for it, using a grasping movement' },
  { term: 'imaginative play', def: 'where the child creates their own world or game, in isolation or with others using new or familiar actions and roles' },
  { term: 'imitation/imitate', def: 'where children copy the actions of others. Initially this is a reflex, over which the baby has no conscious control. As a baby develops they begin to deliberately imitate' },
  { term: 'immature pincer grasp', def: 'object held between thumb and two fingers' },
  { term: 'intelligible', def: 'able to be understood' },
  { term: 'interact', def: 'to be involved in communication or social activity with somebody else' },
  { term: 'interaction', def: 'behaviour which takes place between two people, e.g. a parent and a child' },
  { term: 'intonation', def: 'variations in pitch patterns (melody/rhythm) and emphasis of spoken language that provide important cues for drawing attention to salient words or syllables' },
  { term: 'jargon', def: 'communications that have similar characteristics to spoken or signed language, but that are not understood by other people' },
  { term: 'joint attention', def: 'where two people both share the topic of conversation or focus of attention' },
  { term: 'keyword', def: "a word in a sentence or phrase that carries the most meaning e.g. in the sentence 'go and get the ball' the keyword is 'ball'" },
  { term: 'little scientist', def: 'behaviours such as experimenting within play and looking for new properties of familiar objects' },
  { term: 'memory', def: 'the ability of the brain to store past knowledge of sounds, words, language, events etc.' },
  { term: 'midline', def: 'the middle of the body, as if a vertical line is running from the top of the head down to the feet' },
  { term: 'motor skills', def: 'gross motor skills: ability to use the body to move around, first by turning, then crawling or rolling, then walking and so on. Fine motor skills: ability to use the body for small, more precise movements, particularly hand movements' },
  { term: 'narrative', def: 'an account of a sequence of events in the order in which they happened' },
  { term: 'nasals', def: 'speech sounds produced with air emitted from the nose, such as m, n, ng' },
  { term: 'non-speech sounds', def: 'any sounds that are not speech sounds such as humming, musical sounds or environmental noises' },
  { term: 'noun', def: 'naming words for objects, places, people etc. e.g. bag, Mummy, banana' },
  { term: 'novelty preference', def: 'the tendency for babies to prefer objects, pictures and experiences that they have not seen or had before' },
  { term: 'object permanence', def: 'recognising that an object that moves in space and over time is still the same object, not a new one and that it continues to exist even when out of sight' },
  { term: 'palmar grasp', def: 'using the whole hand to hold objects' },
  { term: 'parallel play', def: 'a child may be playing alongside and/or with similar materials as an adult or another child, but without any sharing of toys or ideas' },
  { term: 'phrase', def: 'a group of words or signs' },
  { term: 'pincer grasp', def: 'picking up small objects between index finger and thumb' },
  { term: 'play sequence', def: 'when a child does one action to one person and then does it again to another, or does consecutive actions in their play, e.g. pouring pretend tea for a doll and then drinking it' },
  { term: 'plural', def: 'expressing more than one person, thing or item' },
  { term: 'possessives', def: "showing ownership in grammatical terms e.g. the boy's teddy, Mummy's cup" },
  { term: 'prepositions', def: 'set of words usually used with nouns or pronouns to show their relation to some other part of the clause e.g. in, over, behind, under, beside' },
  { term: 'pretend play', def: 'behaviours such as acting out simple familiar daily routines, often involving an adult partner and toys, e.g. pretending to drink from a toy cup' },
  { term: 'pronoun', def: 'a word or sign which stands in place of a person/object, e.g. I/he/she/it' },
  { term: 'prone', def: 'lying on your tummy' },
  { term: 'quizzical', def: 'questioning, or expressing puzzlement' },
  { term: 'receptive language', def: 'words or signs combined into phrases or sentences that are understood by the child' },
  { term: 'reduplicated babble', def: "using consonant-vowel syllable-like repetitions such as 'da-da-da-da'" },
  { term: 'representational play', def: "using one object to represent another if the 'real' object isn't there; adopting the characteristics of other people, animals or objects in play; developing imagination, creating imaginary events or friends" },
  { term: 'rhythm', def: 'the pattern formed by stressed and unstressed syllables' },
  { term: 'self-corrects', def: 'when a child realises they have made the wrong choice during an activity and changes to the right solution independently, without adult prompting' },
  { term: 'sensory', def: 'to do with the senses of touch, smell, taste, sight, hearing, movement and balance' },
  { term: 'separation anxiety', def: 'behaviour seen in babies and young children when they are anxious about being separated from their parents/carers and become distressed when left in the care of others' },
  { term: 'sequence', def: 'a number of things, actions, object or pictures that are arranged in a particular order' },
  { term: 'shifting visual attention', def: 'looking briefly from one object to another, the objects may be moving or still' },
  { term: 'sibling', def: 'brother or sister' },
  { term: 'sign', def: 'gestures and symbols made with the hands, body and face that remain constant across contexts (comparable to spoken words in meaning but are combined in their own grammar)' },
  { term: 'situational cues', def: "things in the environment or behaviour of others that help a child to understand what to expect e.g. if Mum puts the child's coat on, gets the car keys and walks to the door, the child will understand they are going out in the car" },
  { term: 'social-emotional development', def: 'how children learn who they are, what feelings they have and how to behave. Learning about what other people are like and how they behave and interact with others, learning to develop relationships' },
  { term: 'social referencing', def: 'watching people to seek out information and use these clues to understand what others are talking about and looking at. Learning that adults get things by looking at them, pointing to them or referring to them' },
  { term: 'speech sounds', def: 'the vowels and consonants of a language' },
  { term: 'spontaneously', def: 'when a child speaks or engages in an activity without any external influence (i.e. without being prompted or asked to by others)' },
  { term: 'stops', def: "consonant sounds made by blocking the air pressure in the mouth and then suddenly releasing it; the air flow can be blocked momentarily by pressing the lips together or by pressing the tongue against the gums or soft palate e.g. 't', 'g', 'k'" },
  { term: 'sustained interest', def: 'attention to a toy or activity for long(er) periods of time' },
  { term: 'syllable', def: 'a unit of spoken language such as a vowel and consonant combination, e.g. biscuit has two syllables' },
  { term: 'symbolic noises/sounds', def: 'a vocalisation used to represent an object, person or place which is not the name of the object, person or place i.e. Choo-choo for train, brrm-brrm for car' },
  { term: 'supine', def: 'lying on your back' },
  { term: 'turn-taking', def: 'where one person in a conversation talks and the other watches and listens, then they exchange roles so that the listener becomes the speaker. Alternatively, in turn-taking games, when each partner in the interaction has a turn (e.g. rolling a ball back and forth, pulling faces at each other etc.)' },
  { term: 'unintelligible', def: 'unable to be understood' },
  { term: 'variegated babble', def: "varying use of consonant-vowel syllable-like vocalisations such as 'da-di-ga'" },
  { term: 'verb', def: 'an action sign or word, e.g. jump, look, sleep' },
  { term: 'visual clues', def: 'pictures, objects, or signs the child can see that help them to remember or understand' },
  { term: 'vocabulary', def: 'all of the words and signs a child knows' },
  { term: 'vocal clashes', def: 'occurs when both participants in a conversation speak at the same time' },
  { term: 'vocalisation/vocalises', def: 'the production of sounds using our voice' },
  { term: 'voiced/voiceless/voicing', def: 'the presence or absence of vocal fold vibration during articulation. Voiced/unvoiced pairs include: b/p, t/d, g/k, v/f, j/ch, z/s' },
  { term: 'vowel sounds', def: "generally this includes the five vowels of the English alphabet a, e, i, o, u. More specifically this refers to any speech sound that is identified by its unrestricted voice flow \u2013 when discussing children's speech a much wider range of sounds is referred to such as 'ee' and 'uh'" }
];

export const itemsFor = (step, sub) =>
  ITEMS.filter(i => i.step === step && i.sub === sub);

export const subdomainsInStep = (step) => {
  const present = new Set(ITEMS.filter(i => i.step === step).map(i => i.sub));
  return AREAS.flatMap(a =>
    a.subdomains.filter(s => present.has(s.id)).map(s => ({ ...s, area: a.id, areaName: a.name }))
  );
};

/* More than half of the items in a subdomain/step marked achieved.
   Counts a backfilled 'achieved before journal started' as achieved,
   since it is an achievement, just not one directly witnessed. */
export const profileMet = (step, sub, levelsById) => {
  const items = itemsFor(step, sub);
  if (!items.length) return false;
  const done = items.filter(i => {
    const l = levelsById[i.id];
    return l === 'achieved' || l === 'achieved_before';
  }).length;
  return done > items.length / 2;
};
