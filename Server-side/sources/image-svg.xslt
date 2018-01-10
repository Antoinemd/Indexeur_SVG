<?xml version="1.0" encoding="UTF-8"?>

<!-- l'élément racine -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/2000/svg">

<!-- l'élément output -->
<xsl:output method="text" encoding="UTF-8" indent="yes" ></xsl:output>

<!--<xsl:variable name="img_id">2</xsl:variable>-->


<xsl:template match="/">
	{
	"image" : {
		"width" : "<xsl:value-of select="svg/@width" />",
		"height" : "<xsl:value-of select="svg/@height" />"
	},
	"forms" : 
		[
		<xsl:apply-templates select="svg"/>
		]
	}
</xsl:template>

 
<xsl:template match="svg">
	<xsl:for-each select="//circle|//line|//rect|//ellipse|//polyline|//polygon">
	{
	"_img_id" : "<xsl:value-of select="$img_id" />",
	"form_type" : "<xsl:value-of select="local-name(.)" />",
	<xsl:if test="@fill">
	"form_color" : "<xsl:value-of select="@fill"/>",
	</xsl:if>
	<xsl:apply-templates select="."/>
	}
	<xsl:if test="./following-sibling::circle|./following-sibling::line|./following-sibling::rect|./following-sibling::ellipse|./following-sibling::polyline|./following-sibling::polygon">,</xsl:if>
	</xsl:for-each>
</xsl:template>

<xsl:template match="circle"> 	
    "cx" : "<xsl:value-of select="@cx" />",
    "cy" : "<xsl:value-of select="@cy" />",
    "r" : "<xsl:value-of select="@r" />"   
</xsl:template>

<xsl:template match="line">	
  	"x1" : "<xsl:value-of select="@x1" />",
 	"y1" : "<xsl:value-of select="@y1" />",
	"x2" : "<xsl:value-of select="@x2" />",
 	"y2" : "<xsl:value-of select="@y2" />"
</xsl:template>

<xsl:template match="rect">
	"x" : "<xsl:value-of select="@x" />",
  	"y" : "<xsl:value-of select="@y" />",
  	"width" : "<xsl:value-of select="@width" />", 
  	"height" : "<xsl:value-of select="@height" />", 
  	"rx": "<xsl:value-of select="@rx" />", 
  	"ry" : "<xsl:value-of select="@ry"/>"
</xsl:template>

<xsl:template match="ellipse">
	"cx" : "<xsl:value-of select="@cx" />",
  	"cy" : "<xsl:value-of select="@cy" />",  
  	"rx" : "<xsl:value-of select="@rx" />", 
  	"ry" : "<xsl:value-of select="@ry" />" 
</xsl:template>

<xsl:template match="polyline">
	"points" : "<xsl:value-of select="@points"/>"
</xsl:template>

<xsl:template match="polygon">
	"points" : "<xsl:value-of select="@points"/>"
</xsl:template>


</xsl:stylesheet>


