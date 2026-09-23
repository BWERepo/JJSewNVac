// Machine Finder: a few questions that point a visitor toward a machine *category* and the
// brands J & J carries for it. No models or prices are recommended (except the Designer Epic 3,
// which J & J features on its own site). It's a conversation starter for a store visit.

export type Answer = { value: string; label: string; hint?: string }
export type Question = { id: 'make' | 'experience' | 'size'; prompt: string; answers: Answer[] }

export const questions: Question[] = [
  {
    id: 'make',
    prompt: 'What do you most want to make?',
    answers: [
      { value: 'garments', label: 'Clothing, mending & everyday sewing' },
      { value: 'quilts', label: 'Quilts' },
      { value: 'embroidery', label: 'Embroidery & monograms' },
      { value: 'everything', label: 'A little of everything' },
    ],
  },
  {
    id: 'experience',
    prompt: 'How much sewing have you done?',
    answers: [
      { value: 'new', label: 'I’m just getting started' },
      { value: 'some', label: 'I’m comfortable at a machine' },
      { value: 'lots', label: 'I’ve been sewing for years' },
    ],
  },
  {
    id: 'size',
    prompt: 'How big do your projects get?',
    answers: [
      { value: 'small', label: 'Small to medium', hint: 'Garments, bags, table runners' },
      { value: 'large', label: 'Large', hint: 'Bed-size quilts, big pieces' },
      { value: 'unsure', label: 'Not sure yet' },
    ],
  },
]

export type Result = {
  title: string
  summary: string
  brands: string[]
  askAbout?: string
  link: string
}

export type Answers = Partial<Record<Question['id'], string>>

export function recommend(a: Answers): Result {
  if (a.make === 'quilts' && a.size === 'large') {
    return {
      title: 'Quilting & longarm machines',
      summary:
        'For bed-size quilts, a longarm or a machine with extra throat space makes quilting far easier than wrestling a big quilt through a domestic machine.',
      brands: ['Handi Quilter', 'Husqvarna Viking', 'Pfaff'],
      link: '/sewing#quilting',
    }
  }
  if (a.make === 'quilts') {
    return {
      title: 'A sewing machine built for piecing and quilting',
      summary:
        'Look for straight, even stitching, a generous work area and good fabric feeding for layers. It handles piecing today and quilting as your projects grow.',
      brands: ['Husqvarna Viking', 'Pfaff'],
      link: '/sewing#machines',
    }
  }
  if (a.make === 'embroidery' || a.make === 'everything') {
    return {
      title: 'A combination sewing & embroidery machine',
      summary:
        'One machine for everyday sewing and built-in embroidery. Your lifetime classes cover hooping, designs and stitch-outs, so you’re not figuring it out alone.',
      brands: ['Husqvarna Viking', 'Pfaff'],
      askAbout: a.experience === 'lots' ? 'Ask to see the Husqvarna Viking Designer Epic 3.' : undefined,
      link: '/sewing#machines',
    }
  }
  if (a.experience === 'new') {
    return {
      title: 'A dependable everyday sewing machine',
      summary:
        'Start with a reliable, easy-to-learn machine. With lifetime classes included, you’ll learn every feature at the machine with the J & J team.',
      brands: ['Singer', 'Husqvarna Viking', 'Pfaff'],
      link: '/sewing#machines',
    }
  }
  return {
    title: 'A capable sewing machine, plus a serger to consider',
    summary:
      'For garments and everyday projects, pair a strong sewing machine with a serger for clean, professional seams and finished edges.',
    brands: ['Husqvarna Viking', 'Pfaff', 'Singer'],
    link: '/sewing#machines',
  }
}
