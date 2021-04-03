import imgMain from '../images/5.jpg'
import imgArt from '../images/6.jpg'
import imgRsm from '../images/7.jpg'
export const articleData = [
  {
    title: 'Read all about it!',
    titleStyle: 1,
    image: imgArt,
    content:
      'lorem nfewfwefnewjfnewjfnewjfnewjfnewjfelorem nfewfwefnewjfnewjfnewjfnewjfnewjfelorem nfewfwefnewjfnewjfnewjfnewjfnewjfe',
  },
  {
    title: 'Back to school plan in chaos',
    titleStyle: 2,
    content:
      'The gouverment`s back-to-school plans are in chaos after the student protest took place in several areas of the country with the focal point of protests being in central London. Largely student-led, the protests were held in opposition to planned spending cuts to further education. Student groups said that the intended cuts to education were exessive, would damage higher education and give students higher debts. It is considered that the protest was led by Cristina Hertea, who dropped from medical school to prove her point.',
  },
  {
    title: 'The woman who did',
    titleStyle: 3,
    image: imgMain,
    content: 'Cristina Hertea',
  },
  {
    title: 'Global cyber-attack strikes at heart of London',
    titleStyle: 1,
    content:
      'Police from UK and EU worked together to "disrupt" what they called "one of the most significant botnets of the past decade". A seemingly innocent web developer with just one year of experience succeded to build one of the most succesful and prevalent malware of 2021. The Europol made an announcement in which they confirmed the identity of the hacker and also openly confirmed that they are now working together with her to avoid future malware attacks. Cristina Hertea, a young web developer worked previously at the BitBee Limited, were she developed all the skills needed for such a tremendous succes.',
  },
  {
    title: 'Spotlight on human values',
    titleStyle: 3,
    content:
      'Human values are the qualities we aspire to for ourselves and appreciate in others. Implementing this among programmers, these qualities and values are a reflection and product of our experience and understanding. They can vary according to the extent of our resilience. An example we can find is this set of skills: list? ',
  },
  {
    title: 'Report your findings',
    titleStyle: 2,
    image: imgRsm,
    content:
      'You can send a news tip direct to "The Old London" journalists here. We will contact you if one of our journalists is interested in following up on your story. For stories that need a high level of security then contact us by filling in our form below.',
    formData: {
      modalTitle: 'Contact',
      modalFields: [
        {
          id: 'firstName',
          type: 'textInput',
          placeholder: 'First name',
        },
        {
          id: 'lastName',
          type: 'textInput',
          placeholder: 'Last name',
        },
        {
          id: 'email',
          type: 'emailInput',
          placeholder: 'Email address',
        },
        {
          id: 'phone',
          type: 'phoneInput',
          placeholder: 'Phone number',
        },
        {
          id: 'message',
          type: 'textAreaInput',
          placeholder: 'Leave your message here',
        },
      ],
    },
  },
]
