export interface Email {
  id: number
  from: string
  subject: string
  preview: string
  time: string
  label?: 'primary' | 'social' | 'work' | 'friends'
  read: boolean
  avatar?: string
  messages?: EmailMessage[]
}

export interface EmailMessage {
  id: number
  content: string
  timestamp: string
  isOutgoing: boolean
  attachments?: string[]
}

export interface EmailLabel {
  id: string
  name: string
  color: string
}

export interface EmailCategory {
  id: string
  label: string
  count: number
  icon?: any
}