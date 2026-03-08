// API Route: Proxy for Prothomashop Products (Bypass CORS)
// GET /api/products

import { NextResponse } from 'next/server'

export async function GET() {
  console.log('🔄 [API Route] Fetching products from Prothomashop...')
  
  try {
    const apiUrl = 'https://admin.prothomashop.com/api/products'
    console.log(`📡 [API Route] Request URL: ${apiUrl}`)
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Cache for 1 hour
      next: { revalidate: 3600 }
    })
    
    console.log(`📊 [API Route] Response Status: ${response.status} ${response.statusText}`)
    console.log(`📋 [API Route] Content-Type: ${response.headers.get('content-type')}`)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ [API Route] HTTP Error: ${response.status}`)
      console.error(`Error body:`, errorText.substring(0, 200))
      
      return NextResponse.json(
        { 
          success: false, 
          error: `HTTP ${response.status}: ${response.statusText}`,
          message: 'API request failed'
        },
        { status: response.status }
      )
    }
    
    // Get response text first
    const responseText = await response.text()
    console.log(`📝 [API Route] Response length: ${responseText.length} chars`)
    console.log(`Preview:`, responseText.substring(0, 100))
    
    // Try to parse JSON
    try {
      const data = JSON.parse(responseText)
      console.log(`✅ [API Route] Successfully parsed JSON`)
      console.log(`Data structure:`, Object.keys(data))
      
      if (data.result?.products) {
        console.log(`📦 [API Route] Found ${data.result.products.length} products`)
      }
      
      return NextResponse.json({
        success: true,
        data: data,
        message: 'Products fetched successfully',
        timestamp: new Date().toISOString()
      })
      
    } catch (parseError) {
      console.error('❌ [API Route] JSON Parse Error:', parseError)
      console.error('Response that failed to parse:', responseText.substring(0, 500))
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid JSON response from API',
          message: 'Failed to parse API response'
        },
        { status: 500 }
      )
    }
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('❌ [API Route] Fetch Error:', errorMessage)
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        message: 'Failed to fetch from Prothomashop API'
      },
      { status: 500 }
    )
  }
}
