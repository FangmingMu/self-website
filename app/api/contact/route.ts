import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const token = process.env.PUSHPLUS_TOKEN
    if (!token) {
      console.error('PUSHPLUS_TOKEN is not set in environment variables.')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const response = await fetch('http://www.pushplus.plus/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        title: `个人网站留言: ${name}`,
        content: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 8px;">收到新的留言</h2>
            <p><strong>姓名:</strong> ${name}</p>
            <p><strong>邮箱:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>内容:</strong></p>
            <div style="background-color: #f9f9f9; padding: 12px; border-radius: 4px; white-space: pre-wrap; color: #555;">${message}</div>
          </div>
        `,
        channel: 'mail',
        template: 'html',
      }),
    })

    const result = await response.json()
    if (result.code !== 200) {
      console.error('PushPlus API Error:', result)
      return NextResponse.json(
        { error: result.msg || 'Failed to send message via PushPlus.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: result.data })
  } catch (error: any) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
